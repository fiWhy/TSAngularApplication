import './app/app.init';
import './dashboard/dashboard.init';
import './user/user.init';
import './posts/posts.init';


import {modules} from './modules.list.config'

angular.module('app.modules', [].concat(modules()));