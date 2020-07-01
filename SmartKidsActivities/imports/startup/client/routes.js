import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'
//Layouts and Pages

import App from '../../ui/App';
import PaginaInicio from '../../ui/PaginaInicio/PaginaInicio';


FlowRouter.route('/', {
    name: 'inicio',
    action() {
        mount(App, {
            content: <PaginaInicio />
        })
    }
})