import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useForm, ValidationError } from '@formspree/react';

interface CustomAlertProps {
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, onClose }) => (
  <div className="w-full flex items-center p-4 mb-6 text-green-800 border border-green-300 rounded-lg bg-green-50" role="alert">
    <CheckCircle2 className="h-5 w-5 mr-2" />
    <div className="flex-1 text-sm font-medium">
      {message}
    </div>
    <button
      onClick={onClose}
      className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg p-1.5 hover:bg-green-100 inline-flex items-center justify-center h-8 w-8"
    >
      <X className="h-4 w-4" />
    </button>
  </div>
);

const ContactForm = () => {
  const { t } = useLanguage();
  const [showNotification, setShowNotification] = useState(false);
  const initialFormState = {
    name: '',
    email: '',
    service: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [state, handleSubmit] = useForm("mqakepen");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resetForm = () => {
    setFormData(initialFormState);
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowNotification(true);
      resetForm();
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }
  }, [resetForm, state.succeeded]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('email', formData.email);
    formDataObj.append('service', formData.service);
    formDataObj.append('message', formData.message);

    await handleSubmit(formDataObj);
  };

  if (state.succeeded) {
    return (
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <CustomAlert
            message={t('Gracias por tu mensaje, nos pondremos en contacto pronto!') || 'Gracias por tu mensaje, nos pondremos en contacto pronto!'}
            onClose={() => window.location.reload()}
          />
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {showNotification && (
          <CustomAlert
            message={t('Gracias por tu mensaje, nos pondremos en contacto pronto!') || 'Gracias por tu mensaje, nos pondremos en contacto pronto!'}
            onClose={() => setShowNotification(false)}
          />
        )}

        <h2 className="text-4xl font-bold text-center mb-16">{t('contact.title')}</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              {t('contact.service')}
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              required
            >
              <option value="">{t('contact.select')}</option>
              <option value="web">{t('services.web')}</option>
              <option value="design">{t('services.graphic')}</option>
              <option value="ux">{t('services.ui')}</option>
              <option value="social">{t('services.social')}</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center px-8 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
              disabled={state.submitting}
            >
              {t('contact.send')}
              <Send className="ml-2 h-5 w-5" />
            </button>
          </div>
          <ValidationError prefix="Form" field="name" errors={state.errors} />
          <ValidationError prefix="Form" field="email" errors={state.errors} />
          <ValidationError prefix="Form" field="service" errors={state.errors} />
          <ValidationError prefix="Form" field="message" errors={state.errors} />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
