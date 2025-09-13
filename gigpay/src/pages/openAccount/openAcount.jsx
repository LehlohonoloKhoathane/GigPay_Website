
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './openAccount.css';

const RequiredStar = () => <span className="required-star" aria-hidden="true">*</span>;

const OpenAccount = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [idDocFile, setIdDocFile] = useState(null);
  const [selfieFile, setSelfieFile] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [specifyOther, setSpecifyOther] = useState('');
  const [proofOfAddress, setProofOfAddress] = useState(null); // optional

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const isOther = selectedPlatform === 'freelancer';
  const allowedIdDocExts = useMemo(() => ['pdf', 'png', 'jpg', 'jpeg'], []);
  const allowedSelfieExts = useMemo(() => ['jpg', 'jpeg', 'png'], []);
  const getExt = (file) => (file?.name?.split('.').pop() || '').toLowerCase();

  const validate = () => {
    const newErrors = {};

    if (!fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!email.trim()) newErrors.email = 'Email Address is required.';
    if (email && !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Enter a valid email address.';
    if (!mobile.trim()) newErrors.mobile = 'Mobile Number is required.';
    if (!nationalId.trim()) newErrors.nationalId = 'National ID / Passport Number is required.';

    if (!idDocFile) {
      newErrors.idDocFile = 'Upload your ID or Passport (PDF, PNG, JPG, JPEG).';
    } else if (!allowedIdDocExts.includes(getExt(idDocFile))) {
      newErrors.idDocFile = 'ID/Passport must be a PDF, PNG, JPG, or JPEG.';
    }

    if (!selfieFile) {
      newErrors.selfieFile = 'Upload a selfie holding your ID or Passport (JPG/PNG).';
    } else if (!allowedSelfieExts.includes(getExt(selfieFile))) {
      newErrors.selfieFile = 'Selfie must be a JPG, JPEG, or PNG.';
    }

    if (!selectedPlatform) newErrors.selectedPlatform = 'Select your gig platform.';
    if (isOther && !specifyOther.trim()) newErrors.specifyOther = 'Please specify your platform.';

    setErrors(newErrors);
    return newErrors;
  };

  const errorsAsListHTML = (errs) => {
    const map = {
      fullName: 'Full Name',
      email: 'Email Address',
      mobile: 'Mobile Number',
      nationalId: 'National ID / Passport Number',
      idDocFile: 'ID/Passport upload',
      selfieFile: 'Selfie with ID/Passport',
      selectedPlatform: 'Gig Platform',
      specifyOther: 'Other platform (specify)',
    };
    const items = Object.keys(errs).map(key => `<li><strong>${map[key] ?? key}:</strong> ${errs[key]}</li>`);
    return `<ul style="text-align:left;margin:0 0 0 1rem;">${items.join('')}</ul>`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
     if (Object.keys(errs).length > 0) {
     Swal.fire({
       icon: 'error',
       title: 'Please fill all the fields',
       text: 'All required fields must be completed before submitting.',
       confirmButtonText: 'OK',
     confirmButtonColor: '#7b2cbf',
     });
     return;
   }

    try {
      setSubmitting(true);

      // TODO: replace with your real submit logic (API call / Airtable etc.)
      // const formData = new FormData();
      // formData.append('fullName', fullName);
      // formData.append('email', email);
      // formData.append('mobile', mobile);
      // formData.append('nationalId', nationalId);
      // formData.append('idDocFile', idDocFile);
      // formData.append('selfieFile', selfieFile);
      // formData.append('platform', selectedPlatform);
      // if (isOther) formData.append('platformOther', specifyOther);
      // if (proofOfAddress) formData.append('proofOfAddress', proofOfAddress);
      // await fetch('/api/open-account', { method: 'POST', body: formData });

      // Simulate success:
      await new Promise((r) => setTimeout(r, 600));

      Swal.fire({
        icon: 'success',
        title: 'Application ready to submit',
        text: 'All required fields look good. You can proceed.',
        confirmButtonText: 'Great!',
        confirmButtonColor: '#7b2cbf'
      });

      // Optionally reset the form here
      // setFullName(''); setEmail(''); setMobile(''); setNationalId('');
      // setIdDocFile(null); setSelfieFile(null); setSelectedPlatform('');
      // setSpecifyOther(''); setProofOfAddress(null); setErrors({});
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Submission failed',
        text: 'Something went wrong. Please try again.',
        confirmButtonText: 'Close',
        confirmButtonColor: '#7b2cbf'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (key) => `input ${errors[key] ? 'invalid' : ''}`;

  return (
    <div className="open-account-container">
      <div className="form-wrapper">
        <h2>Create Your GigPay Account</h2>
        <p>Get started in minutes. All you need is your ID and your gig platform details.</p>

        <form className="open-account-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="fullName">
            Full Name <RequiredStar />
          </label>
          <input
            id="fullName"
            className={inputClass('fullName')}
            type="text"
            placeholder="Lehlohonolo Khoathane"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'err-fullName' : undefined}
          />
          {errors.fullName && <div id="err-fullName" className="field-error">{errors.fullName}</div>}

          <label htmlFor="email">
            Email Address <RequiredStar />
          </label>
          <input
            id="email"
            className={inputClass('email')}
            type="email"
            placeholder="khoathane@gigpay.co.za"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'err-email' : undefined}
          />
          {errors.email && <div id="err-email" className="field-error">{errors.email}</div>}

          <label htmlFor="mobile">
            Mobile Number <RequiredStar />
          </label>
          <input
            id="mobile"
            className={inputClass('mobile')}
            type="tel"
            placeholder="e.g. +27 600 000 000"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            aria-invalid={!!errors.mobile}
            aria-describedby={errors.mobile ? 'err-mobile' : undefined}
          />
          {errors.mobile && <div id="err-mobile" className="field-error">{errors.mobile}</div>}

          <label htmlFor="nationalId">
            National ID / Passport Number <RequiredStar />
          </label>
          <input
            id="nationalId"
            className={inputClass('nationalId')}
            type="text"
            placeholder="Enter your ID or passport number"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
            aria-invalid={!!errors.nationalId}
            aria-describedby={errors.nationalId ? 'err-nationalId' : undefined}
          />
          {errors.nationalId && <div id="err-nationalId" className="field-error">{errors.nationalId}</div>}

          <label htmlFor="idDocFile">
            Upload ID or Passport (PDF, PNG, or JPG) <RequiredStar />
          </label>
          <input
            id="idDocFile"
            className={inputClass('idDocFile')}
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={(e) => setIdDocFile(e.target.files?.[0] || null)}
            aria-invalid={!!errors.idDocFile}
            aria-describedby={errors.idDocFile ? 'err-idDocFile' : undefined}
          />
          {errors.idDocFile && <div id="err-idDocFile" className="field-error">{errors.idDocFile}</div>}

          <label htmlFor="selfieFile">
            Upload Selfie Holding ID or Passport <RequiredStar />
          </label>
          <input
            id="selfieFile"
            className={inputClass('selfieFile')}
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={(e) => setSelfieFile(e.target.files?.[0] || null)}
            aria-invalid={!!errors.selfieFile}
            aria-describedby={errors.selfieFile ? 'err-selfieFile' : undefined}
          />
          {errors.selfieFile && <div id="err-selfieFile" className="field-error">{errors.selfieFile}</div>}

          <label htmlFor="platform">
            Gig Platform <RequiredStar />
          </label>
          <select
            id="platform"
            className={inputClass('selectedPlatform')}
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            aria-invalid={!!errors.selectedPlatform}
            aria-describedby={errors.selectedPlatform ? 'err-platform' : undefined}
          >
            <option value="">Select your platform</option>
            <option value="uber">Uber</option>
            <option value="bolt">Bolt</option>
            <option value="inDrive">inDrive</option>
            <option value="mrd">Mr D</option>
            <option value="sixty60">Checkers Sixty60</option>
            <option value="freelancer">Other</option>
          </select>
          {errors.selectedPlatform && <div id="err-platform" className="field-error">{errors.selectedPlatform}</div>}

          {isOther && (
            <>
              <label htmlFor="specifyOther">
                Please specify <RequiredStar />
              </label>
              <input
                id="specifyOther"
                className={inputClass('specifyOther')}
                type="text"
                placeholder="e.g. Tutor, websites freelance, etc."
                value={specifyOther}
                onChange={(e) => setSpecifyOther(e.target.value)}
                aria-invalid={!!errors.specifyOther}
                aria-describedby={errors.specifyOther ? 'err-specifyOther' : undefined}
              />
              {errors.specifyOther && <div id="err-specifyOther" className="field-error">{errors.specifyOther}</div>}
            </>
          )}

          <label htmlFor="proofOfAddress">
            Proof of Address <RequiredStar />
          </label>
          <input
            id="proofOfAddress"
            className="input"
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={(e) => setProofOfAddress(e.target.files?.[0] || null)}
          />

          <div className="form-buttons">
            <button type="submit" className="submit-button" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Create Account'}
            </button>
            <Link to="/" className="cancel-button">Cancel</Link>
          </div>
        </form>

        <p className="disclaimer">
          🔐 Your information is secure and encrypted. We never share your data without your consent.
        </p>
      </div>
    </div>
  );
};

export default OpenAccount;
