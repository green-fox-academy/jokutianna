'use strict';
//Create a class named BlogPost that has
//authorname, title, text, publicationDate
//3 versions


class BlogPost{
    authorName: string;
    title: string;
    text: string;
    publicatonDate: string;

constructor(authorName, title, text, publicationDate){
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.publicatonDate = publicationDate;
}
}

let firstBlogPost = new BlogPost('JohnDoe', 'LoremIpsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
    console.log(firstBlogPost);

let secondBlogPost =new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10');
    console.log(secondBlogPost);

let thirdBlogPost = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');
    console.log(thirdBlogPost);
