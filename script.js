function Television(power = false, currentChannel) {
  this.power = power; // TV On/OFF
  this.currentChannel = currentChannel; // The current channel
}

Television.prototype.powerOn = function () { this.power = true; };
Television.prototype.powerOff = function () { this.power = false; };
Television.prototype.changeChannel = function (channel) { this.currentChannel = channel; };
Television.prototype.getState = function () {
  let state = '';
  state += `TV is ${this.power ? 'On' : 'Off'}. `;
  if (this.power) {
    state += `The current TV channel is: ${this.currentChannel}`;
  }
  console.log(state);
};


const TV = Television;
[new TV(), new TV(true, 'ABC'), new TV(true, 'CNN')].forEach(tv => tv.getState());
