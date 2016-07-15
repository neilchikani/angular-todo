$(document).ready(function(){
	var booksData = JSON.parse(localStorage.getItem("bookData"));
	var bookData = {
		data : []
	};
	var globalId = {
		count : 0,
		favouriteCount : 0
	};
	if(booksData){
		for(var i = 0; i < booksData.data.length; i++){		
			console.log(booksData.data[i]);
			bookData.data.push(booksData.data[i]);
			if(booksData.data[i].favourite == true){
				globalId.favouriteCount += 1;
			}
		}
		globalId.count = booksData.data.length;
		$('span.totalBooks').text(booksData.data.length)
		$('span.totalFavourite').text(globalId.favouriteCount);
	}else{
		$('span.totalBooks').text(globalId.count);
		$('span.totalFavourite').text(globalId.favouriteCount);
	}

	$('#addBook form').on("submit",function(event){
		event.preventDefault();
		var bookName = $('#book-name').val(),
			authorName = $('#authour-name').val(),
			price = $('#price').val();
			globalId.count += 1;
		// $('#addBook form .row').each(function(){
		// 	var values = $(this).find('input').val();
		// 	if(values){
		// 		bookData.data.push(values);
		// 	}
		// });
		bookData.data.push({
			id: globalId.count,
			book_name : bookName,
			author_name : authorName,
			price: price,
			favourite: false
		});
		if(bookName && authorName && price){
			localStorage.setItem("bookData", JSON.stringify(bookData));
			$('.totalBooks').text(bookData.data.length);
			$('#addBook form .row input').val('');
		}else{
			alert("you missed something");
		}
		 
	});

	$(document).on("click",".left-section ul li a",function(event){
		event.preventDefault();
		var id = $(this).attr('href').replace('#','');
		$(".left-section ul li a").removeClass('active');
		$(this).addClass('active');
		$('.right-section .tab-content').hide();
		$('div[id="'+id+'"]').show();
		if(id == "booksList"){
			var booksData = JSON.parse(localStorage.getItem("bookData")),
				templateData = '';
			if(booksData){
				for(var i = 0; i < booksData.data.length; i++){		templateData += bookListTemplate(booksData.data[i]);
			}
				$('#booksList .books-data-main').html(templateData);
			}
			// console.log(bookData.data[1]);
		}
		if(id == "favouriteList"){
			var booksData = JSON.parse(localStorage.getItem("bookData")),
				templateData = '';
			if(booksData){
				for(var i = 0; i < booksData.data.length; i++){
					if(booksData.data[i].favourite == true){
						templateData += favouriteBookListTemplate(booksData.data[i]);
					}
					
			}
				$('#favouriteList .favourite-books-data-main').html(templateData);
			}
			// console.log(bookData.data[1]);
		}

	});
	$(document).on("click",".books-data-main .close a",function(event){
		event.preventDefault();
		var id = $(this).parents('.book').attr('id');
		$(this).parents('.book').remove();
	 	// var booksData = JSON.parse(localStorage.getItem("bookData"));

	 	for (var i =0; i< bookData.data.length; i++) {
	 		if(bookData.data[i].id == id){
	 			bookData.data.splice(i, 1);
	 			localStorage.setItem("bookData", JSON.stringify(bookData));
	 			$('.totalBooks').text(bookData.data.length);

	 		}
	 		if(booksData.data[i].favourite == true){
				globalId.favouriteCount -= 1;
			}
			$('span.totalFavourite').text(globalId.favouriteCount)
		     
     	}
	 	 
     	
	});
	$(document).on("click",".remove a",function(event){
		event.preventDefault();
		var id = $(this).parents('.book').attr('id');
		$(this).parents('.book').remove();
	 	// var booksData = JSON.parse(localStorage.getItem("bookData"));

	 	for (var i =0; i< bookData.data.length; i++) {
	 		if(bookData.data[i].id == id){
	 			bookData.data[i].favourite = false;
	 			localStorage.setItem("bookData", JSON.stringify(bookData));

	 		}
	 		if(bookData.data[i].favourite == false){
				globalId.favouriteCount -= 1;
			}
			$('span.totalFavourite').text(globalId.favouriteCount)
		     
     	}
	 	 
     	
	});
	$(document).on("click",".books-data-main .cta a",function(event){
		event.preventDefault();
		var id = $(this).parents('.book').attr('id');
		$(this).text("Added to Favourite");
	 	 

	 	for (var i =0; i< bookData.data.length; i++) {
	 		if(bookData.data[i].id == id){
	 			bookData.data[i].favourite = true;
	 			localStorage.setItem("bookData", JSON.stringify(bookData));
	 			if(bookData.data[i].favourite == true){
					globalId.favouriteCount += 1;
				}
				$('span.totalFavourite').text(globalId.favouriteCount)
	 			// $('.favourite').text(bookData.data.length);
	 		}
		     
     	}
	 	 
     	
	});
});

function bookListTemplate(data){
	return '<div id="'+data.id+'" class="book"><div class="top-heading"><h3>'+data.author_name+'</h3><span class="close"><a href="#">X</a></span></div><div class="middle-content"><h2>'+data.book_name+'</h2><p>'+data.price+'</p></div>'+checkFavourite(data.favourite)+'';
}
function favouriteBookListTemplate(data){
	return '<div id="'+data.id+'" class="book"><div class="top-heading"><h3>'+data.author_name+'</h3><span class="close"><a href="#">X</a></span></div><div class="middle-content"><h2>'+data.book_name+'</h2><p>'+data.price+'</p></div><div class="remove"><a href="#"> Remove </a></div></div>';
}
function checkFavourite(favourite){
	if(favourite){
		return '<div class="cta"> <span> Already added in favourite </span></div></div>';
	}else{
		return '<div class="cta"><a href="#"> Add to Favourite </a></div></div>'
	}
}