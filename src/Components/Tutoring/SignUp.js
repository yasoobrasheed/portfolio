import React from 'react'
import { NavBar } from '../NavBar'
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../../aws-exports'
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig)

const SignUp = () => (
    <AmplifyAuthenticator>
    <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "email",
            label: "Email Address",
            placeholder: "Enter your email address",
            required: true,
          },
          {
            type: "password",
            label: "Password",
            placeholder: "Enter your password",
            required: true,
          }
        ]}
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
      <AmplifySignOut />
  </AmplifyAuthenticator>
    )
