import './constants/constants.init';
import './services/services.init';
import './directives/directives.init';
import './filters/filters.init';
import './config/config';
import '../widgets/widgets.init';


angular.module('app.core', [
    'ngCookies',
    'ngMaterial',
    'ngAnimate',
    'ngResource',
    'ui.router',
    'pascalprecht.translate',
    
    'app.core.constants',
    'app.core.directives',
    'app.core.services',
    'app.core.filters',
    
    
    'app.widgets',
    
    'app.core.config',
]);
