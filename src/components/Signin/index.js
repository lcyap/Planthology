import React from 'react'
import { Container, FormButton, FormH1, FormInput, FormLabel, FormWrap, Icon, FormContent, Form, Text } from './SinginElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/"> Planthology</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Log in to your account</FormH1>
                            <FormLabel htmlFor='for'> Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type='submit'> Continue</FormButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
