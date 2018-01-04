import React, { Component } from 'react';
import IceCard from '@icedesign/card';
import './TeamDisplay.scss';

const generatorData = (count) => {
  return Array.from({ length: count }).map((item, index) => {
    return {
      name: `成员${index + 1}`,
      description: '描述文案描述文案描述文案描述文案描述文案',
      imgUrl:
        'https://img.alicdn.com/tfs/TB1cUfViZrI8KJjy0FhXXbfnpXa-450-456.png',
    };
  });
};

export default class TeamDisplay extends Component {
  static displayName = 'TeamDisplay';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = generatorData(6);
    return (
      <div className="team-display">
        <IceCard>
          <h2 style={styles.title}>我们的团队</h2>
          <div style={styles.items}>
            {data.map((item, index) => {
              return (
                <div style={styles.item} key={index}>
                  <img
                    src={item.imgUrl}
                    style={styles.avatar}
                    alt={item.name}
                  />
                  <h5 style={styles.name}>{item.name}</h5>
                  <p style={styles.description}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </IceCard>
      </div>
    );
  }
}

const styles = {
  title: {
    textAlign: 'center',
    fontSize: '28px',
  },
  items: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    width: '33%',
    padding: '0 40px',
    margin: '40px 0',
    textAlign: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '15px',
  },
  avatar: {
    width: '150px',
    height: '150px',
  },
};
