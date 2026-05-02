// AdmissionPopup.jsx
import React, { useState, useEffect } from 'react';
import './AdmissionPopup.css';

const AdmissionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: 'MBA',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Show popup when user opens website (after 3 seconds - increased for better UX)
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSubmitted = sessionStorage.getItem('admissionFormSubmitted');
      if (!hasSubmitted) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit Indian mobile number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Set a timeout to prevent infinite loading
    const timeoutId = setTimeout(() => {
      if (isSubmitting) {
        setIsSubmitting(false);
        setSubmitStatus('error');
        setErrors({ form: 'Request timeout. Please try again.' });
      }
    }, 10000); // 10 second timeout

    try {
      const API_URL = process.env.NODE_ENV === 'production' 
        ? 'https://adityainstitutemanagement.com/api/submit-admission'
        : 'https://mba-2hqv.onrender.com/api/submit-admission';

      const controller = new AbortController();
      const timeoutId2 = setTimeout(() => controller.abort(), 8000); // 8 second timeout for fetch

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      });

      clearTimeout(timeoutId2);
      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        sessionStorage.setItem('admissionFormSubmitted', 'true');
        
        setFormData({
          name: '',
          mobile: '',
          email: '',
          course: 'MBA',
          message: ''
        });
        
        setTimeout(() => {
          setIsOpen(false);
          setSubmitStatus(null);
        }, 3000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      let errorMessage = 'Something went wrong. Please try again.';
      
      if (error.name === 'AbortError') {
        errorMessage = 'Request took too long. Please check your connection and try again.';
      } else if (error.message === 'Failed to fetch') {
        errorMessage = 'Network error. Please check your internet connection.';
      }
      
      setSubmitStatus('error');
      setErrors({ form: errorMessage });
      
      setTimeout(() => {
        setSubmitStatus(null);
        setErrors(prev => ({ ...prev, form: '' }));
      }, 5000);
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={handleClose}>×</button>
        
        <div className="popup-header">
          <h2>Admission Enquiry</h2>
          <p>Fill the form to get more information</p>
        </div>

        {submitStatus === 'success' && (
          <div className="success-message">
            ✅ Form submitted successfully! Our team will contact you soon.
          </div>
        )}

        {submitStatus === 'error' && errors.form && (
          <div className="error-message">
            ❌ {errors.form}
          </div>
        )}

        <form onSubmit={handleSubmit} className="admission-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={errors.name ? 'error-input' : ''}
              disabled={isSubmitting}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number *</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number"
              maxLength="10"
              className={errors.mobile ? 'error-input' : ''}
              disabled={isSubmitting}
            />
            {errors.mobile && <span className="error-text">{errors.mobile}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={errors.email ? 'error-input' : ''}
              disabled={isSubmitting}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="course">Select Course *</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={errors.course ? 'error-input' : ''}
              disabled={isSubmitting}
            >
              <option value="MBA">MBA - Master of Business Administration</option>
              <option value="MCA">MCA - Master of Computer Applications</option>
            </select>
            {errors.course && <span className="error-text">{errors.course}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message / Enquiry</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message or enquiry here..."
              rows="4"
              disabled={isSubmitting}
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span> Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionPopup;