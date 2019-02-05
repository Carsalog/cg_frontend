import Form from "./form";
import {pwSchema, userSchema} from "./schemas";
import {checkEmail} from "../../actions";


class UserInterface extends Form {

  pw = pwSchema();

  schema = userSchema(this);

  handleEmail = async ({currentTarget: input}) => {
    if (input.value.length) {

      const res = await checkEmail(input.value);

      if (res && res.data) {
        const errors = {...this.state.errors};
        errors[input.name] = "This email registered already";
        await this.setState({errors});
      }
    }
  };
}

export default UserInterface;