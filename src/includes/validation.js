import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, alpha_spaces } from '@vee-validate/rules';

export default {
    install(app) {
        app.component('VForm', Form);
        app.component('VField', Field);
        app.component('ErrorMessage', ErrorMessage);

        defineRule('required', required);
        defineRule('email', email);
        defineRule('alpha_spaces', alpha_spaces);

        configure({
            generateMessage: ctx => {
                const messages = {
                    required: 'The field can not be left empty.',
                    email: 'The entered email is not valid.',
                    alpha_spaces: 'The field may only contain alphabetic characters or spaces.'
                }

                const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `${ctx.field} is invalid.`;

                return message;
            }
        })
    }
}