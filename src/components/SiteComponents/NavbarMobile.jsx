import React from "react";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/core";
import { BiMenu } from "react-icons/bi";
import NavGroupLinks from "./NavGroupLinks";

export const NavbarMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <React.Fragment>
      <Box
        cursor="pointer"
        as={BiMenu}
        h="2.5rem"
        w="2.5rem"
        color="#CCC5B9"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        zIndex="1000000000000000"
      >
        <DrawerOverlay>
          <DrawerContent bg="#252422" pt="8vh">
            <DrawerCloseButton />

            <DrawerBody>
              <NavGroupLinks />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </React.Fragment>
  );
};
