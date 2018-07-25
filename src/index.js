import React, { Component } from 'react';
import ReactDOM from "react-dom";

class StorePicker extends Component {
	render() {
		return (
			<div>
				Hello
			</div>
		);
	}
}

// export default StorePicker;

ReactDOM.render(<StorePicker />, document.querySelector("#main"));

var links_collection = document.querySelectorAll('a[href]');

var total_articles = 0;

links_collection.forEach(function (item) {
	var href = item.getAttribute("href");
	// if (href.contains('article/') || href.contains('article/')) {
	// 	total_articles++;
	// }
});

console.log(total_articles);
