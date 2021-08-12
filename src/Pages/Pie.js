import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const DemoPie = () => {
  var data = [
    {
      type: 'Clothes',
      value: 27,
    },
    {
      type: 'Silk',
      value: 25,
    },
    {
      type: 'Woolen',
      value: 18,
    },
    {
      type: 'Cotton',
      value: 15,
    },
    {
      type: 'Polyster',
      value: 10,
    },
    {
      type: 'Coats',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        var percent = _ref.percent;
        return ''.concat((percent * 100).toFixed(0), '%');
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };
  return <Pie {...config} />;
};

export default DemoPie;