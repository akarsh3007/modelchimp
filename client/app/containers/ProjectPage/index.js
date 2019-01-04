/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading } from 'containers/App/selectors';
import Header from 'components/Header';
import ContentCentered from 'components/ContentCentered';

import styled from 'styled-components';
import Section from './Section';
import { loadProjectData } from './actions';
import { makeSelectProjects } from './selectors';
import reducer from './reducer';
import saga from './saga';
import ProjectList from './ProjectList';

import { Layout } from 'antd';

const AppWrapper = styled.div`
`;

export class ProjectPage extends React.PureComponent {
  componentDidMount() {
    this.props.getProjectData();
  }

  render() {
    const { projects } = this.props;

    return (
       <Layout className="layout">
        <Header />
        <article>
          <Helmet>
            <title>Project Page</title>
            <meta name="description" content="PROJECT PAGE" />
          </Helmet>

          <ContentCentered>
              <ProjectList projects={projects} style={{ marginTop: '100px' }}/>
          </ContentCentered>

        </article>
      </Layout>
    );
  }
}

ProjectPage.propTypes = {
  projects: PropTypes.array,
  getProjectData: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    getProjectData: () => dispatch(loadProjectData()),
  };
}

const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  // username: makeSelectUsername(),
  loading: makeSelectLoading(),
  projects: makeSelectProjects(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'project', reducer });
const withSaga = injectSaga({ key: 'project', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProjectPage);
