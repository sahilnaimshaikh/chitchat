import React from 'react'
import { useState } from 'react'
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Box } from '@chakra-ui/react'
import axios from "axios";


const SearchPage = () => {
    const [email, setEmail] = useState();
    const [user, setUser] = useState(false);
    const [name, setname] = useState()
    const [id, setid] = useState()
    const [error, setError] = useState(false)


    const submitHandler = async () => {

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post(
                "http://localhost:786/api/user/search",
                { email },
                config
            );
            setname(data.name)
            setid(data._id)
            setUser(true)
            setError(false)
        }
        catch (error) {
            setError(true)
            setUser(false)
        }

    }


    return (
        <VStack spacing="10px" width={500} margin={50}>
            <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                    // value={email}
                    type="email"
                    placeholder="Enter Your Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>

            <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
            >
                Search
            </Button>
            {user && <Box>user found with Name {name} and id as {id}</Box>}
            {error && <Box>User not found</Box>}
        </VStack>


    )
}

export default SearchPage