"use client";
import React, { useState } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Checkbox,
    Input,
    Link as NextUILink,
} from '@nextui-org/react';

interface SignInProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    onSignUpClick: () => void;
    onForgotPasswordClick: () => void;
}

const SignIn: React.FC<SignInProps> = ({ isOpen, onOpenChange, onSignUpClick, onForgotPasswordClick }) => {
    const [forgotPassword, setForgotPassword] = useState(false);

    const handleForgotPasswordClick = () => {
        setForgotPassword(true);
        onForgotPasswordClick();
    };

    const handleClose = () => {
        setForgotPassword(false);
        onOpenChange(false);
    };
    const handleSignUpLinkClick = () => {
        onSignUpClick(); // Trigger the SignUp click handler from the parent component
    };
    return (
        <Modal isOpen={isOpen} onOpenChange={handleClose} placement="top-center">
            <ModalContent>
                {(onClose: any) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{forgotPassword ? 'Reset Password' : 'Sign In'} </ModalHeader>
                        <ModalBody>
                            {forgotPassword ? (
                                <Input
                                    autoFocus
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                />
                            ) : (
                                <>
                                    <Input
                                        autoFocus
                                        label="Email"
                                        placeholder="Enter your email"
                                        variant="bordered"
                                    />
                                    <Input
                                        label="Password"
                                        placeholder="Enter your password"
                                        type="password"
                                        variant="bordered"
                                    />
                                    <div className="flex py-2 px-1 justify-between">
                                        <Checkbox
                                            classNames={{
                                                label: 'text-small',
                                            }}
                                        >
                                            Remember me
                                        </Checkbox>
                                        <NextUILink color="primary" size="sm" onClick={handleForgotPasswordClick}>
                                            Forgot password?
                                        </NextUILink>
                                    </div>
                                </>
                            )}
                        </ModalBody>
                        <ModalFooter>
                            {forgotPassword ? (
                                <Button color="primary" onPress={onClose}>
                                    Send Reset Email
                                </Button>
                            ) : (
                                <div className='flex gap-4'>
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Sign in
                                    </Button>
                                </div>
                            )}
                        </ModalFooter>
                        {!forgotPassword && (
                            <ModalFooter>
                                <NextUILink color="primary" size="sm" onClick={handleSignUpLinkClick}>
                                    Don't have an account? Sign Up
                                </NextUILink>
                            </ModalFooter>
                        )}
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default SignIn;
