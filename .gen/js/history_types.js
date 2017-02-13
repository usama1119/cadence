//
// Autogenerated by Thrift Compiler (1.0.0-dev)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var shared_ttypes = require('./shared_types');


var ttypes = module.exports = {};
var EventAlreadyStartedError = module.exports.EventAlreadyStartedError = function(args) {
  Thrift.TException.call(this, "EventAlreadyStartedError")
  this.name = "EventAlreadyStartedError"
  this.message = null;
  if (args) {
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field message is unset!');
    }
  }
};
Thrift.inherits(EventAlreadyStartedError, Thrift.TException);
EventAlreadyStartedError.prototype.name = 'EventAlreadyStartedError';
EventAlreadyStartedError.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EventAlreadyStartedError.prototype.write = function(output) {
  output.writeStructBegin('EventAlreadyStartedError');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var RecordActivityTaskStartedRequest = module.exports.RecordActivityTaskStartedRequest = function(args) {
  this.workflowExecution = null;
  this.scheduleId = null;
  this.taskId = null;
  this.requestId = null;
  this.pollRequest = null;
  if (args) {
    if (args.workflowExecution !== undefined && args.workflowExecution !== null) {
      this.workflowExecution = new shared_ttypes.WorkflowExecution(args.workflowExecution);
    }
    if (args.scheduleId !== undefined && args.scheduleId !== null) {
      this.scheduleId = args.scheduleId;
    }
    if (args.taskId !== undefined && args.taskId !== null) {
      this.taskId = args.taskId;
    }
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.pollRequest !== undefined && args.pollRequest !== null) {
      this.pollRequest = new shared_ttypes.PollForActivityTaskRequest(args.pollRequest);
    }
  }
};
RecordActivityTaskStartedRequest.prototype = {};
RecordActivityTaskStartedRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 10:
      if (ftype == Thrift.Type.STRUCT) {
        this.workflowExecution = new shared_ttypes.WorkflowExecution();
        this.workflowExecution.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.I64) {
        this.scheduleId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 30:
      if (ftype == Thrift.Type.I64) {
        this.taskId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 35:
      if (ftype == Thrift.Type.STRING) {
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 40:
      if (ftype == Thrift.Type.STRUCT) {
        this.pollRequest = new shared_ttypes.PollForActivityTaskRequest();
        this.pollRequest.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

RecordActivityTaskStartedRequest.prototype.write = function(output) {
  output.writeStructBegin('RecordActivityTaskStartedRequest');
  if (this.workflowExecution !== null && this.workflowExecution !== undefined) {
    output.writeFieldBegin('workflowExecution', Thrift.Type.STRUCT, 10);
    this.workflowExecution.write(output);
    output.writeFieldEnd();
  }
  if (this.scheduleId !== null && this.scheduleId !== undefined) {
    output.writeFieldBegin('scheduleId', Thrift.Type.I64, 20);
    output.writeI64(this.scheduleId);
    output.writeFieldEnd();
  }
  if (this.taskId !== null && this.taskId !== undefined) {
    output.writeFieldBegin('taskId', Thrift.Type.I64, 30);
    output.writeI64(this.taskId);
    output.writeFieldEnd();
  }
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 35);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.pollRequest !== null && this.pollRequest !== undefined) {
    output.writeFieldBegin('pollRequest', Thrift.Type.STRUCT, 40);
    this.pollRequest.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var RecordActivityTaskStartedResponse = module.exports.RecordActivityTaskStartedResponse = function(args) {
  this.startedEvent = null;
  this.scheduledEvent = null;
  if (args) {
    if (args.startedEvent !== undefined && args.startedEvent !== null) {
      this.startedEvent = new shared_ttypes.HistoryEvent(args.startedEvent);
    }
    if (args.scheduledEvent !== undefined && args.scheduledEvent !== null) {
      this.scheduledEvent = new shared_ttypes.HistoryEvent(args.scheduledEvent);
    }
  }
};
RecordActivityTaskStartedResponse.prototype = {};
RecordActivityTaskStartedResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 10:
      if (ftype == Thrift.Type.STRUCT) {
        this.startedEvent = new shared_ttypes.HistoryEvent();
        this.startedEvent.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.STRUCT) {
        this.scheduledEvent = new shared_ttypes.HistoryEvent();
        this.scheduledEvent.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

RecordActivityTaskStartedResponse.prototype.write = function(output) {
  output.writeStructBegin('RecordActivityTaskStartedResponse');
  if (this.startedEvent !== null && this.startedEvent !== undefined) {
    output.writeFieldBegin('startedEvent', Thrift.Type.STRUCT, 10);
    this.startedEvent.write(output);
    output.writeFieldEnd();
  }
  if (this.scheduledEvent !== null && this.scheduledEvent !== undefined) {
    output.writeFieldBegin('scheduledEvent', Thrift.Type.STRUCT, 20);
    this.scheduledEvent.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var RecordDecisionTaskStartedRequest = module.exports.RecordDecisionTaskStartedRequest = function(args) {
  this.workflowExecution = null;
  this.scheduleId = null;
  this.taskId = null;
  this.requestId = null;
  this.pollRequest = null;
  if (args) {
    if (args.workflowExecution !== undefined && args.workflowExecution !== null) {
      this.workflowExecution = new shared_ttypes.WorkflowExecution(args.workflowExecution);
    }
    if (args.scheduleId !== undefined && args.scheduleId !== null) {
      this.scheduleId = args.scheduleId;
    }
    if (args.taskId !== undefined && args.taskId !== null) {
      this.taskId = args.taskId;
    }
    if (args.requestId !== undefined && args.requestId !== null) {
      this.requestId = args.requestId;
    }
    if (args.pollRequest !== undefined && args.pollRequest !== null) {
      this.pollRequest = new shared_ttypes.PollForDecisionTaskRequest(args.pollRequest);
    }
  }
};
RecordDecisionTaskStartedRequest.prototype = {};
RecordDecisionTaskStartedRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 10:
      if (ftype == Thrift.Type.STRUCT) {
        this.workflowExecution = new shared_ttypes.WorkflowExecution();
        this.workflowExecution.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.I64) {
        this.scheduleId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 30:
      if (ftype == Thrift.Type.I64) {
        this.taskId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 35:
      if (ftype == Thrift.Type.STRING) {
        this.requestId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 40:
      if (ftype == Thrift.Type.STRUCT) {
        this.pollRequest = new shared_ttypes.PollForDecisionTaskRequest();
        this.pollRequest.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

RecordDecisionTaskStartedRequest.prototype.write = function(output) {
  output.writeStructBegin('RecordDecisionTaskStartedRequest');
  if (this.workflowExecution !== null && this.workflowExecution !== undefined) {
    output.writeFieldBegin('workflowExecution', Thrift.Type.STRUCT, 10);
    this.workflowExecution.write(output);
    output.writeFieldEnd();
  }
  if (this.scheduleId !== null && this.scheduleId !== undefined) {
    output.writeFieldBegin('scheduleId', Thrift.Type.I64, 20);
    output.writeI64(this.scheduleId);
    output.writeFieldEnd();
  }
  if (this.taskId !== null && this.taskId !== undefined) {
    output.writeFieldBegin('taskId', Thrift.Type.I64, 30);
    output.writeI64(this.taskId);
    output.writeFieldEnd();
  }
  if (this.requestId !== null && this.requestId !== undefined) {
    output.writeFieldBegin('requestId', Thrift.Type.STRING, 35);
    output.writeString(this.requestId);
    output.writeFieldEnd();
  }
  if (this.pollRequest !== null && this.pollRequest !== undefined) {
    output.writeFieldBegin('pollRequest', Thrift.Type.STRUCT, 40);
    this.pollRequest.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var RecordDecisionTaskStartedResponse = module.exports.RecordDecisionTaskStartedResponse = function(args) {
  this.workflowType = null;
  this.previousStartedEventId = null;
  this.startedEventId = null;
  this.history = null;
  if (args) {
    if (args.workflowType !== undefined && args.workflowType !== null) {
      this.workflowType = new shared_ttypes.WorkflowType(args.workflowType);
    }
    if (args.previousStartedEventId !== undefined && args.previousStartedEventId !== null) {
      this.previousStartedEventId = args.previousStartedEventId;
    }
    if (args.startedEventId !== undefined && args.startedEventId !== null) {
      this.startedEventId = args.startedEventId;
    }
    if (args.history !== undefined && args.history !== null) {
      this.history = new shared_ttypes.History(args.history);
    }
  }
};
RecordDecisionTaskStartedResponse.prototype = {};
RecordDecisionTaskStartedResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 10:
      if (ftype == Thrift.Type.STRUCT) {
        this.workflowType = new shared_ttypes.WorkflowType();
        this.workflowType.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.I64) {
        this.previousStartedEventId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 30:
      if (ftype == Thrift.Type.I64) {
        this.startedEventId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 40:
      if (ftype == Thrift.Type.STRUCT) {
        this.history = new shared_ttypes.History();
        this.history.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

RecordDecisionTaskStartedResponse.prototype.write = function(output) {
  output.writeStructBegin('RecordDecisionTaskStartedResponse');
  if (this.workflowType !== null && this.workflowType !== undefined) {
    output.writeFieldBegin('workflowType', Thrift.Type.STRUCT, 10);
    this.workflowType.write(output);
    output.writeFieldEnd();
  }
  if (this.previousStartedEventId !== null && this.previousStartedEventId !== undefined) {
    output.writeFieldBegin('previousStartedEventId', Thrift.Type.I64, 20);
    output.writeI64(this.previousStartedEventId);
    output.writeFieldEnd();
  }
  if (this.startedEventId !== null && this.startedEventId !== undefined) {
    output.writeFieldBegin('startedEventId', Thrift.Type.I64, 30);
    output.writeI64(this.startedEventId);
    output.writeFieldEnd();
  }
  if (this.history !== null && this.history !== undefined) {
    output.writeFieldBegin('history', Thrift.Type.STRUCT, 40);
    this.history.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

