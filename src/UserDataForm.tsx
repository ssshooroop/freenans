import React, { useState } from 'react';
import './UserDataForm.css';

interface PaymentMethod {
  method: string;
  details: string | File;
}

interface UserDataForm {
  logo: File | null;
  firstName: string;
  lastName: string;
  country: string;
  taxNumber: string;
  address: string;
  paymentMethods: PaymentMethod[];
}

interface Errors {
  firstName?: string;
  lastName?: string;
  country?: string;
  taxNumber?: string;
  address?: string;
  paymentMethods?: string[];
}

interface UserDataFormProps {
  onClose: () => void;
}

const UserDataForm: React.FC<UserDataFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<UserDataForm>({
    logo: null,
    firstName: '',
    lastName: '',
    country: '',
    taxNumber: '',
    address: '',
    paymentMethods: [{ method: '', details: '' }]
  });

  const [errors, setErrors] = useState<Errors>({});
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const paymentOptions = [
    "Bank transfer",
    "Wise",
    "PayPal",
    "Skrill",
    "Payoneer",
    "SmartCAT",
    "Crypto: BTC",
    "Crypto: ETH",
    "Crypto: USDT"
  ];

  const countries = [
      "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Caribbean Netherlands",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo - Brazzaville",
  "Congo - Kinshasa",
  "Cook Islands",
  "Costa Rica",
  "CÃ´te dâ€™Ivoire",
  "Croatia",
  "Cuba",
  "CuraÃ§ao",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard & McDonald Islands",
  "Honduras",
  "Hong Kong SAR China",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao SAR China",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "North Korea",
  "North Macedonia",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestinian Territories",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn Islands",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "RÃ©union",
  "Romania",
  "Russia",
  "Rwanda",
  "Samoa",
  "San Marino",
  "SÃ£o TomÃ© & PrÃ­ncipe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia & South Sandwich Islands",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "St. BarthÃ©lemy",
  "St. Helena",
  "St. Kitts & Nevis",
  "St. Lucia",
  "St. Martin",
  "St. Pierre & Miquelon",
  "St. Vincent & Grenadines",
  "Sudan",
  "Suriname",
  "Svalbard & Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks & Caicos Islands",
  "Tuvalu",
  "U.S. Outlying Islands",
  "U.S. Virgin Islands",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Wallis & Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe"
  ];

  const validateForm = () => {
    const newErrors: Errors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'What is your name?';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'You forgot to enter your surname';
    }

    if (!formData.country) {
      newErrors.country = 'Where do you live?';
    }

    if (!formData.taxNumber.trim()) {
      newErrors.taxNumber = 'Who we are without tax number…';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Where do you live?';
    }

    const validPaymentMethod = formData.paymentMethods.some(
      method => method.method && method.details
    );

    if (!validPaymentMethod) {
      newErrors.paymentMethods = ['Your clients couldn`t pay you without it'];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, logo: e.target.files[0] });
    }
  };

  const handlePaymentMethodChange = (index: number, field: 'method' | 'details', value: string | File) => {
    const newPaymentMethods = [...formData.paymentMethods];
    newPaymentMethods[index] = {
      ...newPaymentMethods[index],
      [field]: value
    };
    setFormData({ ...formData, paymentMethods: newPaymentMethods });
  };

  const handleAddPaymentMethod = () => {
    setFormData({
      ...formData,
      paymentMethods: [...formData.paymentMethods, { method: '', details: '' }]
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWasSubmitted(true);
    
    if (validateForm()) {
      console.log('Form data:', formData);
      onClose();
    }
  };

  const isCryptoPayment = (method: string) => {
    return method.startsWith('Crypto:');
  };

  return (
    <div className="userdata-overlay">
      <div className="userdata-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <form className="userdata-form" onSubmit={handleSubmit}>
          <div className="file-upload-container">
            <input
              type="file"
              id="logo"
              className="file-input"
              accept="image/*"
              onChange={handleLogoChange}
            />
            <label htmlFor="logo" className="file-label">
              Add your logo (optional)
            </label>
          </div>

          <div className="form-row">
            <div className="input-container">
              <input
                type="text"
                placeholder="Name"
                className={`userdata-input ${wasSubmitted && errors.firstName ? 'error' : ''}`}
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />
              {wasSubmitted && errors.firstName && 
                <div className="error-message">{errors.firstName}</div>
              }
            </div>

            <div className="input-container">
              <input
                type="text"
                placeholder="Surname"
                className={`userdata-input ${wasSubmitted && errors.lastName ? 'error' : ''}`}
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              />
              {wasSubmitted && errors.lastName && 
                <div className="error-message">{errors.lastName}</div>
              }
            </div>
          </div>

          <div className="form-row">
            <div className="input-container">
              <select
                className={`userdata-input ${wasSubmitted && errors.country ? 'error' : ''}`}
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
              >
                <option value="">Select country</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              {wasSubmitted && errors.country && 
                <div className="error-message">{errors.country}</div>
              }
            </div>

            <div className="input-container">
              <input
                type="text"
                placeholder="Tax number"
                className={`userdata-input ${wasSubmitted && errors.taxNumber ? 'error' : ''}`}
                value={formData.taxNumber}
                onChange={(e) => setFormData({...formData, taxNumber: e.target.value})}
              />
              {wasSubmitted && errors.taxNumber && 
                <div className="error-message">{errors.taxNumber}</div>
              }
            </div>
          </div>

          <div className="input-container">
            <input
              type="text"
              placeholder="Address"
              className={`userdata-input ${wasSubmitted && errors.address ? 'error' : ''}`}
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            />
            {wasSubmitted && errors.address && 
              <div className="error-message">{errors.address}</div>
            }
          </div>

          {formData.paymentMethods.map((method, index) => (
            <div key={index} className="payment-method-container">
              <div className="input-container">
                <select
                  className={`userdata-input ${wasSubmitted && errors.paymentMethods?.[index] ? 'error' : ''}`}
                  value={method.method}
                  onChange={(e) => handlePaymentMethodChange(index, 'method', e.target.value)}
                >
                  <option value="">Select payment method</option>
                  {paymentOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {wasSubmitted && errors.paymentMethods?.[index] && 
                  <div className="error-message">{errors.paymentMethods[index]}</div>
                }
              </div>

              {isCryptoPayment(method.method) ? (
                <div className="file-upload-container">
                  <input
                    type="file"
                    id={`qr-${index}`}
                    className="file-input"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        handlePaymentMethodChange(index, 'details', e.target.files[0]);
                      }
                    }}
                  />
                  <label htmlFor={`qr-${index}`} className="file-label">
                    Upload QR code
                  </label>
                </div>
              ) : (
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Account details"
                    className={`userdata-input ${wasSubmitted && errors.paymentMethods?.[index] ? 'error' : ''}`}
                    value={method.details as string}
                    onChange={(e) => handlePaymentMethodChange(index, 'details', e.target.value)}
                  />
                </div>
              )}
            </div>
          ))}

          <a 
            href="#" 
            className="add-payment-link"
            onClick={(e) => {
              e.preventDefault();
              handleAddPaymentMethod();
            }}
          >
            Add another payment method
          </a>

          <button 
            type="submit" 
            className="save-button"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDataForm;