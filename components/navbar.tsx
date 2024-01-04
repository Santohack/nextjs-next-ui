"use client";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";

import { Kbd } from "@nextui-org/kbd";


import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import NextLinkRoute from "./NextLinkRoute";
import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


export const Navbar = () => {
	const { isOpen: signInOpen, onOpen: openSignIn, onClose: closeSignIn } = useDisclosure();
	const { isOpen: signUpOpen, onOpen: openSignUp, onClose: closeSignUp } = useDisclosure();

	const openSignInModal = () => {
		openSignIn();
		closeSignUp(); // Close SignUp modal if open when SignIn button is clicked
		
	  };
	  const handleForgotPasswordClick = () => {
		// Logic to handle the forgot password action
		console.log('Forgot password clicked');
	  };
	  const handleSignInClick = () => {
		
		openSignUp(); // Open the SignUp component
		closeSignIn(); // Close the SignIn component
		console.log('Sign in clicked');
	  };
	  
	  const handleSignUpClick = () => {
		// Logic to handle the sign up action
		
		openSignIn(); // Open the SignIn component
		closeSignUp(); // Close the SignUp component
	  };
	  const openSignUpModal = () => {
		openSignUp();
		closeSignIn(); // Close SignIn modal if open when SignUp button is clicked
	  };
	
	  const closeAllModals = () => {
		closeSignIn();
		closeSignUp();
	  };
	
	  const handleSignInButtonClick = () => {
		openSignInModal();
	  };
	
	  const handleSignUpButtonClick = () => {
		openSignUpModal();
	  };
	
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<><NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">demo</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="hidden md:flex gap-2">
					<NextLinkRoute onPress={handleSignInButtonClick} children={"Sign In"} />

					<NextLinkRoute  onPress={handleSignUpButtonClick} children={"Sign Up"} />
				</NavbarItem>
			</NavbarContent>
			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>
			<NavbarMenu>
				{searchInput}
				<NavbarMenuItem>
					<div className="mx-4 mt-2 flex flex-col gap-2">
						<Link href="/sign-in">
							Sign In

						</Link>
						<Link href="/sign-up">
							Sign Up
						</Link>
					</div>
				</NavbarMenuItem>
			</NavbarMenu>
		</NextUINavbar>
		<SignIn isOpen={signInOpen} onOpenChange={closeSignIn} onSignUpClick={handleSignInClick } onForgotPasswordClick={handleForgotPasswordClick} />
      <SignUp isOpen={signUpOpen} onSignInClick={handleSignUpClick} onOpenChange={closeSignUp} />
		</>
	);
};

