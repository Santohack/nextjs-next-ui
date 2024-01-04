import React from 'react';
import NextLink from 'next/link';
import { Button } from '@nextui-org/button';

interface ButtonTextProps {
  onPress: () => void;
  children: React.ReactNode;
}

const NextLinkRoute = ({ onPress, children }: ButtonTextProps) => {
  return (
    <Button
      color="primary"
      onClick={onPress}
      className="text-sm font-normal text-default-600 bg-default-100"
      variant="flat"
    >
      {children}
    </Button>
  );
};

export default NextLinkRoute;
