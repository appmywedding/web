import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginWithEmailAndPassword, registerWithEmailAndPassword, auth } from '../../firebase';
import { setUser } from '../../actions/auth';
import Router from 'next/router';
import axios from 'axios';
import Splash from '../../components/Splash';


export default function Login() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('1@2.com');
    const [password, setPassword] = useState('123456');
    const [isShowSplash, setIsShowSplash] = useState(true);

    const MAX_TIME_TO_REMOVE_SPLASH = 3000; // Incase the onAuthStateChanged does not fire a response.

    const onLogin = async () => loginWithEmailAndPassword(email, password);
    const onRegister = async () => registerWithEmailAndPassword("Orel", email, password)

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const setInterceptor = (user) => {
        axios.interceptors.request.use(
            (req) => {
                if (!req.data) {
                    req.data = {}
                }
                req.data.auth = user;
                return req;
            },
            (err) => {
                return Promise.reject(err);
            }
        );
    }

    async function checkAuth() {
        auth?.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUser(user));
                setInterceptor(user);
                Router.push('/home')
            } else {
                setIsShowSplash(false);
            }
        });
    }

    useEffect(() => {
        checkAuth();
        setTimeout(() => setIsShowSplash(false), MAX_TIME_TO_REMOVE_SPLASH);
    }, [auth]);

    return (
        isShowSplash ? <Splash /> :
            <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                {/* <Head>
                <title>Login</title>
            </Head> */}
                <div class="max-w-md w-full space-y-8">
                    <div>
                        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        <p class="mt-2 text-center text-sm text-gray-600">
                            {/* Or
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a> */}
                        </p>
                    </div>
                    {/* <form class="mt-8 space-y-6"> */}
                    <input type="hidden" name="remember" value="true" />
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input onChange={onEmailChange} value={email} id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input onChange={onPasswordChange} value={password} id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
                        </div>

                        <div class="text-sm">
                            <a href="forgotpassword" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                        </div>
                    </div>

                    <div>
                        <button onClick={() => onLogin()} type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            Sign in
                        </button>
                        <button onClick={() => onRegister()} type="submit" class="group relative w-full flex justify-center mt-6 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            Register
                        </button>
                    </div>
                    {/* </form> */}
                </div>
            </div>
    )
}