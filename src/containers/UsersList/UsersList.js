import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import List from '../../components/List/List';
import ListItem from '../../components/ListItem/ListItem';

import { fetchUsersList } from '../../store/actions/userList';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.onFetchUsersList();
  }

  render() {
    const listItems = this.props.usersList.map(item => <ListItem data={item} />);

    return (
      <View style={styles.container}>
        <List listItems={listItems} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    usersList: state.usersList.usersList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUsersList: () => dispatch(fetchUsersList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
