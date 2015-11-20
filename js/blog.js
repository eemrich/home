"use strict";


(function () {

function renderPosts(posts) {

    var postsDiv = document.getElementById("posts");

    posts.forEach(function (post) {
        var postDiv = document.createElement("div");
        var postNameDiv = document.createElement("div");
        var postAuthorDiv = document.createElement("div");
        var postContentDiv = document.createElement("div");

        postNameDiv.innerHTML = post.name;
        postAuthorDiv.innerHTML = post.author;
        postContentDiv.innerHTML = post.content;

        postDiv.setAttribute("class", "card");
        postNameDiv.setAttribute("class", "subject");
        postAuthorDiv.setAttribute("class", "author");
        postContentDiv.setAttribute("class", "post");

        postDiv.appendChild(postNameDiv);
        postDiv.appendChild(postAuthorDiv);
        postDiv.appendChild(postContentDiv);

        postsDiv.appendChild(postDiv);
    });

}

// fetches file "posts.json" and passes parsed json object into callback function

function getPosts(callback) {

    var request = new XMLHttpRequest();

    request.onload = function () {

        var posts = JSON.parse(request.responseText);

        callback(posts);
    };

    request.open("GET", "js/posts.json", true);
    request.send(null);
}

getPosts(function (posts) {
    renderPosts(posts);
});


}());




$(document).ready(function () {
    $("#filter").keyup(function () {

        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val();

        // Loop through the comment list
        $(".blogPosts .card").each(function () {

            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();

                // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
            }
        });

    });
});




$(document).ready(function () {
    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function () {
        if (isOpen == false) {
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function () {
        return false;
    });
    searchBox.mouseup(function () {
        return false;
    });
    $(document).mouseup(function () {
        if (isOpen == true) {
            $('.searchbox-icon').css('display', 'block');
            submitIcon.click();
        }
    });
});

function buttonUp() {
    var inputVal = $('.searchbox-input').val();
    inputVal = $.trim(inputVal).length;
    if (inputVal !== 0) {
        $('.searchbox-icon').css('display', 'block');
    } else {
        $('.searchbox-input').val('');
        $('.searchbox-icon').css('display', 'block');
    }
}

