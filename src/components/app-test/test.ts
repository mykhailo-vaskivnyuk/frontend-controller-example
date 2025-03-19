import { Store } from "../../../lib/store/store";

export class NewStore extends Store {
  method() {
    setInterval(() => {
      this.setState({ loading: !this.loading })
    }, 3000)
  }
}
