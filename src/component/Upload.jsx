import React, { useRef } from 'react';
import { Box, Flex, Text, FormControl } from '@blockstack/ui';
import { useConnect } from '@blockstack/connect';
import styled, { keyframes } from 'styled-components'
import { SearchItem } from './SearchItem'


export const Upload = () => {

  const { authOptions } = useConnect();
  const { userSession } = authOptions;
  // const { username } = userSession.loadUserData();

  const uploadBox = useRef(null);
  const searchBox = useRef(null);
  const uploadButton = useRef(null);
  const searchButton = useRef(null);
  const uploadInput = useRef(null);
  const uploadLabel = useRef(null);
  const userData = new FormData();

  const progress_bar_stripes = keyframes`
    from {
      background-position: 1rem 0;
    }
    to {
      background-position: 0 0;
    }
  `;

    const ProgBar = styled(Box)`
    animation: ${progress_bar_stripes} 1s linear infinite;
    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-size: 1rem 1rem;
  `;

  const showBox = ( event, box ) => {
    event.preventDefault();
    if (box === uploadBox) {
      uploadButton.current.style.backgroundColor = "#ffffdd";
      uploadButton.current.style.color = "#3F5B73";
      searchButton.current.style.backgroundColor = "transparent";
      searchButton.current.style.color = "#ffffdd";
      uploadBox.current.style.display = "block";
      searchBox.current.style.display = "none";
    } else {
      uploadButton.current.style.backgroundColor = "transparent";
      uploadButton.current.style.color = "#ffffdd";
      searchButton.current.style.backgroundColor = "#ffffdd";
      searchButton.current.style.color = "#3F5B73";
      uploadBox.current.style.display = "none";
      searchBox.current.style.display = "block";
    }
  }

  const onUploadChange = e => {
    if (!e.target.value) {
      uploadLabel.current.innerHTML = "Choose File";
      return;
    }
    uploadLabel.current.innerHTML = e.target.files[0].name;
    console.log(e.target.files[0]);
    userData.set('file', e.target.files[0]);
  }

  const onFileUpload = e => {
    e.preventDefault();
    console.log(userSession)
  }


  return (
    <Box mx="2" mt="2" minHeight="calc(100vh - 225px)" backgroundColor="#ffffdd" boxShadow="0 4px 8px 0 #00000033">
      <Box>
        <Box backgroundColor="#3F5B73">
          <Box width="50%" ref={uploadButton} as="button" backgroundColor="#ffffdd" px="10px" py="5px" outline="none" color="#3F5B73" onClick={e => showBox(e, uploadBox)} transition="background-color ease .3s"><Text className="fa fa-upload"></Text>{' '}Upload</Box>
          <Box width="50%" ref={searchButton} as="button" backgroundColor="transparent" px="10px" py="5px" outline="none" color="#ffffdd" onClick={e => showBox(e, searchBox)} transition="background-color ease .3s"><Text className="fa fa-search"></Text>{' '}Search</Box>
        </Box>
        <Box ref={uploadBox} px="4" pb="1" maxWidth="700px" mx="auto">
          <Text textAlign="center" display="block" fontSize={['24px', '36px']} color="#3f5b73" borderBottom="2px solid #3f5b73">Adding to the value of your own!</Text>
          <FormControl color="#547fb2">
            <Flex mt="3" alignItems="center" justifyContent="center" transition="background-color ease .5s" cursor="pointer" backgroundColor="#3f5b73" borderRadius="15px" color="#ffffdd" _hover={{ backgroundColor: "#00aba9"}} onClick={e => uploadInput.current.click()} px="2">
              <Text className="fa fa-file" fontSize={['16px', '24px']}></Text>
              <Text ref={uploadLabel} ml="2" fontSize={['16px', '24px']} textAlign="center">Choose File</Text>
              <Box ref={uploadInput} as="input" type="file" display="none" onChange={onUploadChange} />
            </Flex>
            <Box mt="3">
              <Text fontSize={['16px', '24px']}>File Summary:</Text>
              <Box as="textarea" py="1" px="5" rows="5" width="100%" boxShadow="0 4px 8px 0 #00000033" outline="none" resize="none"/>
            </Box>
            <Box fontSize={['16px', '24px']} ml="auto" width="fit-content" px="2" backgroundColor="#3f5b73" borderRadius="15px" color="#ffffdd" transition="background-color ease .5s" cursor="pointer" _hover={{ backgroundColor: "#00aba9" }} mt="1" onClick={e => onFileUpload(e)}>Upload</Box>
            <Flex overflow="hidden" height="1rem" borderRadius="0.25rem" backgroundColor="#e9ecef" mt="2">
              <ProgBar width="0%" backgroundColor="#3f5b73" />
            </Flex>
          </FormControl>
        </Box>
        <Box ref={searchBox} px="4" pb="1" maxWidth="700px" mx="auto" color="#3f5b73" display="none">
          <Text textAlign="center" display="block" fontSize={['24px', '36px']} borderBottom="2px solid #3f5b73">Advance the research of others!</Text>
          <FormControl>
            <Box position="relative" mt="2">
              <Box as="input" width="100%" outline="none" borderRadius="20px" pl="12" pr="5" py="2" boxShadow="0 1px 6px 0 rgb(32 33 36 / 28%)" placeholder="Type Search Keyword">
              </Box>
              <Text className="fa fa-search" position="absolute" left="5" top="50%" transform="translateY(-50%)" fontSize="16px"></Text>
            </Box>
            <Box mt="2"></Box>
          </FormControl>
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <Flex justifyContent="center">
            {/* <Text>{'<'}</Text>
            <Text>{'<'}</Text> */}
          </Flex>
        </Box>
      </Box>
    </Box>
    
    
  );
  
};
