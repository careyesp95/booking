import { Box, HStack} from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            hight="40px"
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            borderBottom=" 1px solid grey"
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {
              <HStack>
              {
                <h1>Hola</h1>
              }
              </HStack>
            }
          </nav>
          <nav>
            {
              <HStack 
                spacing={6}
                >
                {
                  <>
                    <a href='/'  >Home</a>
                    <a href='/services' >Services</a>
                  </>
                }
              </HStack>
            }
          </nav>
                </HStack>
            </Box>
        </Box>
    )
}

export default Navbar;