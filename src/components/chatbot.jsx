import React from 'react';
import ChatBot from 'react-simple-chatbot';

const config = {
  width: '400px',
  height: '500px',
  floating: true,
  floatingStyle: {
    right: '15px',
    bottom: '60px',
    width: '40px',
    height: '40px',
  },
  headerTitle: 'Chat Help',
};

const steps = [
  {
    id: 'intro',
    message: 'Hello, Nice to see you here.',
    trigger: 'intro2',
  },
  {
    id: 'intro2',
    message: 'I am your assistant.',
    trigger: 'intro3',
  },

  {
    id: 'intro3',
    message: 'Are you a teacher or student?',
    trigger: 'intro-user',
  },
  {
    id: 'intro-user',
    options: [
      { value: 't', label: 'Teacher', trigger: 'teacher' },
      { value: 's', label: 'Student', trigger: 'student' },
    ],
  },
  {
    id: 'teacher',
    message: 'Ok Sir/Madam, you can login with your google account',
    trigger: 'teacher2',
  },

  {
    id: 'teacher2',
    message:
      'After login, you can create your teacher profile which will be available on our site.',
    trigger: 'loop',
  },
  {
    id: 'student',
    message:
      'Ok buddy, you are at the right place. You will find the best teachers.',
    trigger: 'loop',
  },
  {
    id: 'loop',
    user: true,
    trigger: 'intro3',
  },
];

const ChatBotComponent = () => {
  return (
    <ChatBot
      steps={steps}
      {...config}
      recognitionEnable={
        JSON.parse(window.localStorage.getItem('muted')) ? true : false
      }
      speechSynthesis={{
        enable: JSON.parse(window.localStorage.getItem('muted')) ? true : false,
        lang: 'en',
      }}
    />
  );
};

export default ChatBotComponent;
