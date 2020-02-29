(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{12:function(e,t,o){e.exports=o(26)},17:function(e,t,o){},18:function(e,t,o){},26:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(8),c=o.n(l),r=(o(17),o(18),o(6)),s=o(11),d=o(1),i=o(2),u=o(4),m=o(3),p=o(5),f=o(9),h=o.n(f),g=function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={title:""},o.handleChange=function(e){o.setState({title:e.target.value})},o.handleKeyPress=function(e){var t=o.state.title;if("Enter"===e.key&&t){var n={title:t,id:h()(),completed:!1};o.props.addNewTodo(n),o.setState({title:""})}},o}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.title;return a.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:e,onChange:this.handleChange,onKeyPress:this.handleKeyPress})}}]),t}(a.a.Component),b=o(10),v=o.n(b),E=function(e){var t=e.todo,o=e.onDeleteTodo,n=e.onUpdateCompleted,l=t.title,c=t.id,r=t.completed;return a.a.createElement("li",{className:v()({completed:r})},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",id:c,onChange:n,checked:r?"checked":""}),a.a.createElement("label",{htmlFor:c},l),a.a.createElement("button",{type:"button",className:"destroy",onClick:o})),a.a.createElement("input",{type:"text",className:"edit"}))},C=function(e){var t=e.todos,o=e.onDeleteTodo,n=e.onUpdateCompleted,l=e.onToggleCompleted;return a.a.createElement("div",null,a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onClick:l}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),t.length>0&&a.a.createElement("ul",{className:"todo-list"},t.map((function(e){return a.a.createElement(E,{key:e.id,todo:e,onDeleteTodo:function(){return o(e.id)},onUpdateCompleted:function(){return n(e.id)}})}))))},y=function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],filter:"All"},o.addNewTodo=function(e){o.setState((function(t){return{todos:[].concat(Object(s.a)(t.todos),[e])}}))},o.deleteTodo=function(e){o.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},o.handleCompleted=function(e){o.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(r.a)({},t,{completed:!t.completed}):t}))}}))},o.toggleAllCompleted=function(e){e.target.checked?o.setState((function(e){return{todos:e.todos.map((function(e){return Object(r.a)({},e,{completed:!0})}))}})):o.setState((function(e){return{todos:e.todos.map((function(e){return Object(r.a)({},e,{completed:!1})}))}}))},o.deleteCompleted=function(){o.setState((function(e){return{todos:e.todos.filter((function(e){return!e.completed}))}}))},o.filterTodos=function(e){var t=e.target.value;o.setState({filter:t})},o.handleFilters=function(){var e=o.state,t=e.filter,n=e.todos;switch(t){case"Active":return n.filter((function(e){return!e.completed}));case"Completed":return n.filter((function(e){return e.completed}));default:return n}},o}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos");if(e){var t=JSON.parse(e);this.setState({todos:t})}}},{key:"componentDidUpdate",value:function(e,t){t.todos!==this.state.todos&&localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){var e=this.state.todos.filter((function(e){return!1===e.completed}));return a.a.createElement("section",{className:"todoapp"},a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement(g,{addNewTodo:this.addNewTodo})),a.a.createElement("section",{className:"main"},a.a.createElement(C,{todos:this.handleFilters(),onDeleteTodo:this.deleteTodo,onUpdateCompleted:this.handleCompleted,onToggleCompleted:this.toggleAllCompleted})),a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"todo-count"},"Items left:",e.length),a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("button",{type:"button",className:"selected",onClick:this.filterTodos,value:"All"},"All")),a.a.createElement("li",null,a.a.createElement("button",{type:"button",onClick:this.filterTodos,value:"Active"},"Active")),a.a.createElement("li",null,a.a.createElement("button",{type:"button",onClick:this.filterTodos,value:"Completed"},"Completed"))),a.a.createElement("button",{type:"button",className:"clear-completed",onClick:this.deleteCompleted},"Clear completed")))}}]),t}(a.a.Component);c.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.9eb35ffc.chunk.js.map