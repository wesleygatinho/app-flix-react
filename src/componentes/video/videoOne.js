export default class Video {
    state = {
      html: "",
    };
    componentDidMount() {
      const src = this.props.src;
      const html = `
          <video autoPlay muted loop>
              <source src=${src} />
          </video>
        `;
      this.setState({ html });
    }
    render() {
      return <div dangerouslySetInnerHTML={{ __html: this.state.html }}></div>;
    }
  }

  