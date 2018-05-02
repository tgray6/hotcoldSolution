# React hot or cold solution

[GitHub](https://github.com/Thinkful-Ed/react-hot-cold)




TRAVIS ERROR LOG BELOW:

Installing deploy dependencies
<br>
Successfully installed dpl-script-1.9.6
<br>
1 gem installed
<br>
!!! Script support is experimental !!!
<br>
dpl.2
<br>
Preparing deploy
<br>
dpl.3
<br>
Deploying application
<br>
node[6087]: ../src/node_contextify.cc:631:static void node::contextify::ContextifyScript::New(const v8::FunctionCallbackInfo<v8::Value>&): Assertion `args[1]->IsString()' failed.
<br>
 1: node::Abort() [node]
 <br>
 2: 0x87b6c5 [node]
 <br>
 3: node::contextify::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&) [node]
 <br>
 4: v8::internal::FunctionCallbackArguments::Call(v8::internal::CallHandlerInfo*) [node]
 <br>
 5: 0xad5b9f [node]
 <br>
 6: v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*) [node]
 <br>
 7: 0x1a7e8410427d
 <br>
Script failed with status 
<br>
failed to deploy
