import React, { Component } from "react";
import { connect } from "react-redux";
import Article from "./components/Article";
import { fetchArticleDetails } from "./actions";

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchArticleDetails();
  }
  render() {
    const { title, subtitle, paragraphs, imagelink } = this.props.data;
    return (
      <main>
        {this.props.isLoadingData ? (
          "Loading . . ."
        ) : (
          <Article
            title={title}
            subtitle={subtitle}
            paragraphs={paragraphs}
            imagelink={imagelink}
          />
        )}
      </main>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData,
});

export default connect(mapStateToProps, {
  fetchArticleDetails,
})(App);
