import React from "react";
import { Container } from "semantic-ui-react";
import "./Heading.css";
import { Menu } from "antd";
import logo from "../imgs/tempImgs/麒豹logo-top.png";
import imageBanner from "../imgs/tempImgs/banner.png";

class Heading extends React.Component {
  state = {
    current: null
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div>
        <Container>
          <div className="headerTop">
            <div className="logoTop">
              <img alt="logo" src={logo} />
            </div>
            <div className="center-nav" />

            <div className="right-navigations">
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
                <Menu.Item key="mail">Home</Menu.Item>
                <Menu.Item>head1</Menu.Item>

                <Menu.Item key="johnDesign">head2</Menu.Item>
                <Menu.Item key="case1">head3</Menu.Item>
                <Menu.Item key="case2">head4</Menu.Item>
                <Menu.Item key="case3">head5</Menu.Item>
              </Menu>
            </div>
            <div className="hor-lines">
              <div />
              <div />
              <div />
            </div>
          </div>
        </Container>

        <div className="image-banner">
          <img alt="welcome" src={imageBanner} style={{ width: "100%" }} />
        </div>
      </div>
    );
  }
}

export default Heading;
