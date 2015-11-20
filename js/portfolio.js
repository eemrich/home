"use strict";


(function () {

    function renderPosts(posts) {

        var postsDiv = document.getElementById("posts");

        posts.forEach(function (post) {
            var postDiv = document.createElement("div");
            var postNameDiv = document.createElement("div");
            var postPartnersDiv = document.createElement("div");
            var postContributionDiv = document.createElement("div");
            var postDescriptionDiv = document.createElement("div");
            var postGitDiv = document.createElement("div");

            postNameDiv.innerHTML = post.name;
            postPartnersDiv.innerHTML = post.partners;
            postContributionDiv.innerHTML = post.contribution;
            postDescriptionDiv.innerHTML = post.description;
            postGitDiv.innerHTML = post.git;

            postDiv.setAttribute("class", "card");
            postNameDiv.setAttribute("class", "name");
            postPartnersDiv.setAttribute("class", "post");
            postContributionDiv.setAttribute("class", "post");
            postDescriptionDiv.setAttribute("class", "post");
            postGitDiv.setAttribute("class", "partners");

            postDiv.appendChild(postNameDiv);
            postDiv.appendChild(postPartnersDiv);
            postDiv.appendChild(postContributionDiv);
            postDiv.appendChild(postDescriptionDiv);
            postDiv.appendChild(postGitDiv);

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

        request.open("GET", "js/portfolio.json", true);
        request.send(null);
    }

    getPosts(function (posts) {
        renderPosts(posts);
    });


}());




$(document).ready(function () {
    $("#filter").keyup(function () {

        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;

        // Loop through the comment list
        $(".blogPosts .card").each(function () {

            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();

                // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
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
        $('.searchbox-icon').css('display', 'none');
    } else {
        $('.searchbox-input').val('');
        $('.searchbox-icon').css('display', 'block');
    }
}
