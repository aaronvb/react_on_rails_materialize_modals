# react_on_rails materialize modal launch example

This is an example app that shows how to launch a modal with [react_on_rails](https://github.com/shakacode/react_on_rails) and [materialize](https://github.com/mkhairi/materialize-sass).

The main part of the code is in `client/app/bundles/HelloWorld/components/HelloworldWidget.jsx`

```javascript
render() {
  const { name } = this.props;
  return (
    <div className="container">
      <h3>
        Hello, {name}!
      </h3>
      <hr/>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              id="first_name"
            />
          <label htmlFor="first_name"
                 className="active">
            Say hello to:
          </label>
          </div>
        </div>
      </form>
      <TestModal />
      <p>
        <a className="waves-effect waves-light btn modal-trigger" href="#">
          Modal Class Trigger
        </a>
      </p>
      <p>
        <a className="waves-effect waves-light btn"
           onClick={this.openModal}>
          Programmatically Launch Modal
        </a>
      </p>
    </div>
  );
}

openModal() {
  $('#modal1').openModal();
}
```

## Build
- [react_on_rails](https://github.com/shakacode/react_on_rails) 2.3.0
- [materialize](https://github.com/mkhairi/materialize-sass) 0.97.5
- Ruby on Rails 4.2.5.1
- Ruby 2.2.3
- Npm 3.5.2
