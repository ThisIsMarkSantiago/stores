'use strict';

import mongoose from 'mongoose';

var ThingSchema = new mongoose.Schema({
  name: String,
  info: String,
  link: String,
  active: Boolean
});

export default mongoose.model('Thing', ThingSchema);
