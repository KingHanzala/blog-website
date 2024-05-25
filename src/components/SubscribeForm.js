import React, { useState } from 'react';
import axios from 'axios';
import getBackendURL from '../config.js';
import "../styles/SubscribeForm.css";

const backendURL = getBackendURL();

const SubscriptionForm = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${backendURL}/api/sendOtp`, { email });
            if (response.data.success) {
                setOtpSent(true);
                setMessage('OTP has been sent to your email.');
            }
        } catch (error) {
            if (error.response.status === 400) {
                setMessage('User already subscribed');
            } else {
                console.error('Error sending OTP:', error);
                setMessage('Failed to send OTP. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${backendURL}/api/verifyOtp`, { email, otp });
            if (response.data.success) {
                setMessage('Subscription successful!');
                setIsSuccess(true);
            } else {
                setMessage('Invalid OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setMessage('Failed to verify OTP. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const isValid = /^\d{6}$/.test(otp);

    return (
        <div className="subscribe-form">
            {!otpSent ? (
                <div className="form-group">
                    <form onSubmit={handleEmailSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            ) : (
                <div className="form-group">
                    <form onSubmit={handleOtpSubmit}>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                        <button type="submit" disabled={!isValid || isSuccess}>Verify OTP</button>
                    </form>
                </div>
            )}
            {isLoading && (
                <div className="loading">
                    <div className="spinner"></div>
                </div>
            )}
            {message && <p>{message}</p>}
        </div>
    );
};

export default SubscriptionForm;
