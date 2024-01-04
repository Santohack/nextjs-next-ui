import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Checkbox,
    Input,
    Link,
} from '@nextui-org/react';

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    onSignInClick: () => void;
    blur?: boolean;
}
const SignUp = ({ isOpen, onOpenChange,onSignInClick }: ModalProps) => {
    const handleSignInLinkClick = () => {
        onSignInClick(); // Trigger the SignUp click handler from the parent component
    };
    return (

        <Modal

            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="center"
        >
            <ModalContent>
                {(onClose: any) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
                        <ModalBody>
                            <Input
                                autoFocus

                                label="Email"
                                placeholder="Enter your email"
                                variant="bordered"
                            />
                            <Input
                                autoFocus

                                label="First Name"
                                placeholder="Enter your first name"
                                variant="bordered"
                            />
                            <Input
                                autoFocus

                                label="Last Name"
                                placeholder="Enter your last name"
                                variant="bordered"
                            />
                            <Input

                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                                variant="bordered"
                            />
                            <Input

                                label="Confirm Password"
                                placeholder="Enter your password"
                                type="password"
                                variant="bordered"
                            />
                            <div className="flex py-2 px-1 justify-between">
                                <Checkbox
                                    classNames={{
                                        label: "text-small",
                                    }}
                                >
                                T&C
                                </Checkbox>
                                <Link color="primary" onClick={handleSignInLinkClick} href="#" size="sm">
                                   Already have an account? Sign In
                                </Link>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Sign Up
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default SignUp;
