module.exports = function() {
        'use strict';
        const transcript =`
        
<p><strong>Ryan Burgess</strong><br />
Welcome to a new episode of the front end happier podcast. In this episode, we're talking with Evan from Sentry about micro interactions that improve the user experience. Evan, you want to give a brief introduction of who you are, what you do and what your favorite Happy Hour beverages?

</p>
<p><strong>Evan Purkhiser</strong><br />
Sure. Awesome, I guess. First off, Thanks for Thanks for having me, guys. I really appreciate it. Super excited to just kind of talk front end talk shop. Talk microinteractions definitely gonna be we'll talk about that. But yeah, hey, my name is Evan. I'm a senior engineer over at Century. I've been there for I think just about six years now. So I want to say I joined when we were like 30 ish people and maybe like 20 engineers. So is, it was pretty small. So I've definitely got kind of the whole history of everything. Actually, I actually think I joined as a, I think my title, the time was like product infrastructure engineer. I ended up dealing with a back end, but at some point, I just started doing kind of all front end. And I'm pretty much just doing that now. So I'm kind of like heading that all up. And just kind of, you know, just doing a lot of front end over its century. But yeah, over here in the Bay, San Francisco, so I've been here for about nine years. And then a few other companies. But yeah, definitely loving the vibe a century a lot of really smart people. Let's see. favorite drink. You know, okay, so alcoholic drink. I think I'm really simple. I mean, I'm not one of those people. That's like super knowledgeable. That's, that's like, Oh, I know all these different drinks. So I think like just gin and tonic for me, though tonight, I've got a very Bay Area. I've got a Boba so

</p>
<p><strong>Ryan Burgess</strong><br />
nice. I'm actually jealous. I want to boba right now, that would be actually really good. Awesome. Well, let's also give introductions of our panelists. Stacy, you want to start it off?

</p>
<p><strong>Stacy London</strong><br />
Sure. I'm Stacy London. I'm a principal front end engineer at Atlassian,

</p>
<p><strong>Jem Young</strong><br />
Jem young engineering manager at Netflix.

</p>
<p><strong>Ryan Burgess</strong><br />
And I'm Ryan Burgess. I'm a engineering manager at Netflix. In each episode of the front end, happier podcast, we like to choose a keyword that if it's mentioned at all, in the episode, we will all take a drink. What do we decide today's keyword is?

</p>
<p><strong>Evan Purkhiser</strong><br />
UX

</p>
<p><strong>Jem Young</strong><br />
UX

</p>
<p><strong>Ryan Burgess</strong><br />
u x? All right? I'm pretty sure with micro interactions, it's we're gonna be saying UX at some point. But yeah, let's be a good way to start to Evan is, you know, what's let's talk a little bit of history about the front end century. But even what a century do i I'm very aware. But I don't know if all of our listeners know what a century do. And yeah, let's talk a little bit about the history since you've been there for a while.

</p>
<p><strong>Evan Purkhiser</strong><br />
Yeah, for sure. So sentry kind of at its core is a, I guess the simplest is an error monitoring platform. So the general ideas, you know, anyone who's building software, you know, you want to know that it's working, right? you ship it out, you ship out an app, you ship out a website, ship out a front end, you generally want to know that, like it's not breaking for everyone, right. And I guess kind of the you know, typical way you might do that, as you'll look through some logs, make sure you're not getting any exceptions and your, you know, server logs, you know, maybe you've hacked together something on your front end that, you know, chips off some global exception handler that, you know, tells you when things are breaking. But sentry kind of just streamlines all of that into like a really, really nice package where, you know, your integrator SDK, and essentially, anytime anything breaks, you'll just be notified, it has a bunch of smart features, you know, where it will kind of group together the same errors. So you can see right away, like, oh, this error is happening, you know, 50,000 times in the last, like, 10 hours, whereas this error might have only happened, you know, 15 times the last 10 hours. So it's very obvious right away, like what's important, and it doesn't matter other, you know, kind of really nice thing. So, you know, keep track of users or keep track of sessions. So you can see, like, you know, what percentage of my customers are having errors, you can see, you know, how many users are affected by a particular error, kind of similar to being able to like, this is really important, this is definitely really important to, you know, everyone's affected by it. And then on top of that, you know, we've kind of built a, a number of other kind of products just on top of sentry, that kind of makes sense in that monitoring space. So we have a product for kind of performance monitoring, and that's kind of, you know, all the way kind of like full stack where it's like distributed tracing kind of thing where, you know, on the front end requests, fires off to the back end, some database stuff happens. And then you know, that response goes back to the front end, and some UI stuff happens at some point, you get your first Contentful paint, and you kind of use sentry, to kind of track all of that and kind of see over time, like, how are we doing on performance, right, like, Is it is it slow? Is it fast? It's it's kind of like one of those things where if you think about it, performance is kind of a quote unquote, error in a way right you know, if your website takes 10 seconds to load for everyone. That's not very good. So that and yeah, at least, we've got a few other kind of nifty things, I think we just released our session replay feature, which is another really cool one where essentially it can capture sort of the the UI or the content of a user's session, as they might run into a bug or enter an error. And then in sentry, you can go and replay that. And I think that's kind of like the the general overview of kind of sentry as a product. I don't know you guys tell me. Does that make sense?

</p>
<p><strong>Ryan Burgess</strong><br />
No, I think you did a really good job explaining it. And I think like, yeah, the replay, being able to replay a session is so handy when you really want to debug something like, back in the day, you wouldn't have something like that. You'd be like, you know, someone be like, Oh, this doesn't work on my browser machine. And you're like, can I like remote into that person's machine? Like, there was just really hard to do that. And so being able to get some of those insights, just like through software is so so powerful? Yeah, definitely. And so since you've been there for a while, I'm curious, like, what's the front end look like? I mean, it sounds like you started on the back end, but love to kind of hear a little more in depth on like, what are the libraries frameworks? You know, what's changed?

</p>
<p><strong>Evan Purkhiser</strong><br />
Yeah, so I think century was one of the probably earlier kind of products to adopt react. So you know, when I joined, it was like, I want to say, circa 20 2017. I think, you know, we were already fallen on React, and I want to say, you know, century started kind of as a product. You know, I don't even know how old it is. I think we just had our 15 year committed Versary with a wow, first commit a century, and maybe just even a little history on century, you know, it was it honestly was kind of like a developer's developer tool in the sense that, you know, the founder of the company, just kind of was building it in his spare time. And, you know, I think at some point, you know, people were like, Hey, can we just, like, pay you to run this kind of thing? You know, and, you know, you know, one thing leads to another, and ultimately, there's a business out of it. But oh, geez, you think I forgot the question now?

</p>
<p><strong>Ryan Burgess</strong><br />
I think more just like along the lines of like, Oh, sure.

</p>
<p><strong>Evan Purkhiser</strong><br />
Yeah, yeah, I can just kind of dive into all of it. So, yeah, it was using React kind of way back when I want to say when I joined, we were already using Webpack. I think as I joined, we were kind of migrating off of sass kind of getting away from that just because of the maintainability of, you know, having these giant style sheets with, you know, hundreds of different files being imported. And we moved over to styled components. I think specifically, we moved over to emotion. At some point, I want to say maybe four years ago, we kind of had this meeting where we're like, Hey, should we should we be type scripting, and this and I, and I want to say like in the meeting, I remember it was kind of like, you know, we're like, hey, that makes a lot of sense for SDKs. But, you know, does, we really want to be slowed down by having the right types. And, you know, at some point, we just said, you know, I think someone hack we did and basically, we threw TypeScript in and, you know, wasn't too long for like, Hey, this is really good. So I think about two and a half years ago, we finished our full TypeScript migration, which is something like we want to say like 2500 files. And to get us I think we have a pretty good blog post on that, actually check the sentry blog for that.

So yeah, we've got we got TypeScript, we love that. Point, what else? What else? What else is in there?

We no, we're not too fancy with like server side rendering or anything like that, you know, the back ends, kind of Django monoliths kind of thing. And then we've got, you know, various other kind of little services here and there for some of the heavy ingestion type stuff.

</p>
<p><strong>Stacy London</strong><br />
So Django, so it's kind of like a sort of traditional server served pages, but then some maybe react dropped in there. So

</p>
<p><strong>Evan Purkhiser</strong><br />
I want to say when I joined it, it was it was a lot of kind of server rendered stuff. At some point, we did have a pretty big push to just kind of get everything into React and kind of turn the Django side of it really just into an API server. We is a little bit of a sore spot, we do still have a few Django rendered pages. And it hurts us in the performance sense, because, you know, just to load sentry the website, you have to go through the whole Django back end, we can just statically serve you some, you know, index dot, dot HTML that, you know, quickly loads everything. But yeah, it's it's mostly, it's mostly a sponsor these days.

</p>
<p><strong>Ryan Burgess</strong><br />
Nice. There's always those legacy pages that you know, it's just like, it's a thorn in your like side, but you're like, yeah, it's gonna it's so much work to go deal with it. And it's not something that's prioritized. Yeah, we all have those stories, which is Yeah, it's great. So micro interactions. How would you describe a micro interaction?

</p>
<p><strong>Evan Purkhiser</strong><br />
Yeah, let's do it. So as kind of thinking about this earlier. I think the way I can describe it, and I don't know, this might be like a very, like, kind of personal way to describe it. But anytime that I feel like you use like an app or a website, and either it's like, it's your first time using it, or, or maybe it's like, yeah, let's just say it's your first time using it, and it just kind of feels really good. And when I say feels, I really mean kind of like this, like, you know, it's more of like a psychological kind of thing. Where, you know, just little things about the interface or little things about like the functionality of it, just kind of make you kind of feel like, Hey, this is nice. Like, this is this is a good user experience.

</p>
<p><strong>Ryan Burgess</strong><br />
Chairs, let's

</p>
<p><strong>Evan Purkhiser</strong><br />
drink for that. Yeah, I guess to me, you know, some some really good examples that maybe I've kind of been really loving recently of, kind of, maybe like applications that have really nice. That kind of like feeling. I think, like, if anyone's ever used linear, I think linear is like, really nice. Like, it's one of those tools where like, just as I'm using, I'm like, I really liked this software, right. And it's like, you know, I want to use it just because it's so good kind of thing. I think it's kind of part of part of that experience. Anyway, I feel I'm getting pretty kind of deeply like psychological here, I guess maybe if we kind of bring it back up, I think, you know, a lot of what maker introductions are really, you know, just kind of little animations here and there, like little things sprinkled in that, you know, just kind of reactions to user interactions, right? So for example, I think maybe a classic one might be the Google's material design when you click on a button, and it has that little pulse where you clicked, right? Yes, yeah. It's just like a subtle little thing, right. But it's like, you know, it's like, it's nice. So I think things like that. I think there's, you know, a bunch of other kinds of things. But I think maybe kind of just these little animations are kind of one one thing I think we associate a lot with, like random acts, or micro interactions.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think you've defined it really well. Or go, I think it was all of these those. It's like subtlety that it's like, you almost you don't need it necessarily, either. Like it's not, it's not even noticeable, but it is like, you're just like, wow, that was just that simple little tweak that it was there. And it just you're like, Oh, that was nice. And it's pleasant. But it's like, it's not needed. Like if it was like closing something it could just have closed or, you know, clicking something it could have just clicked but it is that subtle animation that just it feels nice. It's it brings joy.

</p>
<p><strong>Evan Purkhiser</strong><br />
Yeah, that's, that's, I like that it brings joy. You know, I want I want joy when I'm using my software, right, you know, yeah, to use something all day. And especially, you know, something like sentry where, presumably, if you're opening it, it's probably because something is broken, you don't want to open it. And I don't know, have these harsh things closing in front of you, you want, you know, some nice subtleties that don't make you hate yourself more than you already do for breaking that thing.

</p>
<p><strong>Ryan Burgess</strong><br />
Totally. So I'm curious, too, is like, I mean, other than bringing joy, what makes a micro interaction, I guess, make a better user experience.

</p>
<p><strong>Evan Purkhiser</strong><br />
I think this is this is tricky, because like I said, it is kind of more of this, like, visceral thing, right? That was the word I was looking for earlier, this role. But I think, you know, part parts of it can be more than just kind of these like feelings, I think it can also be just making a really nice user experience where these micro interactions actually add to how usable it is. So for example, I think, I think one kind of good. Good thing we're talking about here is kind of like accessibility, right? I'm sure we've all kind of use that app where it is missing keyboard shortcuts, right? Where it's like you do a keyboard shortcut, and you'd expect it to, like do the thing, like, you know, let's say you're trying to make a new folder or a new like, document in whatever tool you're using, and you hit Command N, you'd expect it to do that, right? And maybe it doesn't use that, or maybe it doesn't do that. And, you know, it's just kind of like, I gotta like, go up there and click on Make it happen, right? So, you know, kind of the same thing, like in web apps, right? Like, if you open a drop down, you expect to be able to like use your arrow keys to go up and down. Right. And I think that that even itself, you know, I would kind of define that as kind of a micro interaction, right is where it's like these small little things. And maybe I'm bending the definition here a little bit. But I think things like that can really, really add to the actual usability of the application, right? So you know, building these good accessibility into your components into your UI library can not only kind of feel nice as a user, but actually make you more productive. I mentioned linear earlier. And I think, you know, the, one of the things I really love about about their, their UX is we're going to a second one of the things I really love about their UX is just that everything honestly does work that you would expect to work right if you if you want to add a filter to your your list of tasks or whatever it shows you right there that it's like you hit Command F and if you do Do that it brings up this drop down and you can start typing and, and it actually, it's really incredible how nice the filtering is because it will start, it will take your typing and it will do like the fuzzy complete on all the various like things that you can filter on and suggest like what things to filter it. And I think to me, those are like really, really nice micro interactions. Sorry, I'm talking a lot about linear. I've certainly implemented some of these things myself in Century. And we can talk about that as well. Anyway, I think we need to drink.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, cheers. I think enough times, but yes, no, I like that a lot. It's like those subtleties can actually add value. Like I think you can add animations to too many things, right? Like you actually go overboard. Yeah. But I like the way that you explain micro interactions is it's almost like it's adding value to right like I think about it is another one that I always think of micro interactions is when you have like something where you've clicked something like it turns to a loader, like almost immediately where it's like cat, you don't need it to like have this chunky feel. It's just has this nice, subtle animation to a load, which is pleasant. And you're also like, oh, something's happening. And so those little things that can go a long way. You could just show a loader like that slaps up over it. But I think there is some subtlety there that just makes it more seamless

</p>
<p><strong>Evan Purkhiser</strong><br />
one. One other example I was just thinking about actually, is I'll be sure this one on our on our tooltips and century, they used to just you know, you'd hover over and they'd pop up, right. At some point I you know, I brought in framer framer is great, by the way, framer motion, anyone that is looking for a really good animation library framers, incredible Ebron framer, and it lets you do animation presents animated animations, which I think like are notoriously very, very difficult to do, right? Where it's like something that unmounted and disappears, how do you animate it out? Anyways, so I added that to our tooltips, so that they would, you know, fade in and out, which is really simple, but then kind of this extra little thing that I ended up adding in was, it would scale down, but the origin of the scale would be to where it was anchored. So if the tooltip was pointing downward at something, the anchor would be at the bottom tip of the tooltips. And then it would scale down, I think, maybe like to point nine, five, you know, scale, and it just, it, it kind of, well, not only does it feel really nice, but it kind of gives you an indication of like, where that tooltip came from, right? So there's kind of this affordance of like, oh, that same thing, when it pops up, right, it pops up, and it kind of pops almost out of that, right. And so you can it's very obvious, right? It's, it's, it's one of those things where you don't think about it, but it kind of helps you to see, I think

</p>
<p><strong>Stacy London</strong><br />
like that, that made me think about we're talking about tooltips, I think there's so much you can do with like tooltips and small, like, sprinkling small things in that make a big difference. And I don't know if sentry does this, I actually can't remember. But the you mentioned shortcuts like in the tooltip for a particular interaction, it'll actually like say, oh, and show you that you can do these set of keys, to do a shortcut to get your faster next time. And I love that it's just like this, like in place reminder of action that you want to do and how to do it faster next time if you want with a keyboard. And I think it's just like a tiny little detail like that really makes things more like efficient and nice.

</p>
<p><strong>Evan Purkhiser</strong><br />
Yeah, it's a nice little detail button. I think it's like, what is the word affordance? Right. It's a nice affordance to the user.

</p>
<p><strong>Jem Young</strong><br />
I think like probably too deeply about things like this more on the meta layer. So I like micro interactions, because it tells me a lot about the company, which is really weird. But good. So a lot of companies, they treat engineering, especially front end as kind of a cost center. It's like, oh, yeah, those nerds, they, you know, they they build web pages cool. And that's still true even today, which is kind of wild. But when I go to a website, and it has like all these like pleasant micro interactions that shows some designer, some UX engineer, some front end engineer, put time and thought into the product. That tells me a lot about the culture, it tells me a lot about how the organization is structured that they can prioritize things like this. So I know it's really silly, but that's what I get. When I see micro interactions I see like, we care about the user. And here's the little bit extra we're willing to give you and that makes me much more inclined to maybe do business with them or sign up or something like that, versus, you know, cold, austere website, you're like, yeah, it's functional. But there's no joy there. There's no delight.

</p>
<p><strong>Evan Purkhiser</strong><br />
One of the one of the things I spent quite a bit of time working on at Century. This was a couple years ago, I think, is the onboarding experience. So just kind of the post signup, you know, creating your project, sending your first century error, that whole experience and actually, I kind of thought a lot about that kind of the first user experience and kind of giving people that you know, really nice feeling right away. So I definitely kind of incorporate a lot of little little hints here and there. I think one of my favorites was when you have You set up the project and you get your little code snippet for, you know, here's how to integrate your SDK. And it tells you how to trigger an error. It has this nice little kind of like blinking, like beacon, where it says, like waiting for first error. And it just, it's a little subtle thing. Like it certainly didn't need to be there. Right. But I think it, you know, definitely adds that extra touch to that. Yeah, I mean, like you said, it's like, people care about that, right?

</p>
<p><strong>Stacy London</strong><br />
It's almost like a tie back to like physical devices, like having some something a light turned on or blinking. That's like, I'm on I've turned I've turned on, I think that's kind of an interesting way to like, tie the the physical world in this, like, digital world that we're into.

</p>
<p><strong>Evan Purkhiser</strong><br />
What is that? What is that? Oh, skeuomorphism. That's it? Yeah, yeah, definitely. I think that's, you know, it's getting trendy again, right now. So you got to, you know, keep on the edge for that kind of stuff.

</p>
<p><strong>Ryan Burgess</strong><br />
So I liked it, what Jem had said about the you know, that it almost says a lot about the company that, hey, they're spending this extra time because we're saying like, even earlier, we're saying you don't necessarily need these things. It's not preventing you from doing something. But it goes a long way. And it adds that polish. I'm curious, like, it sounds like century believes in doing this. So Evan, like, how do you all find time to do that? Like, is it a design team? Or a product manager? Like? Or is it engineering driving this? Like, I'm curious, like, how that comes about? Or is this just like built into the culture that you want to make these things happen? Or is it just really kind of someone adding that extra little spice into it?

</p>
<p><strong>Evan Purkhiser</strong><br />
Yeah, I love this question. Because I feel like there's like a lot to dig into here. So I have this little story. I like to tell sometimes where I remember, right, when I joined century, it was maybe like, one or two weeks in and you know, I was doing some little thing on the front end, or, you know, maybe I was just using our product, I think. And I noticed this, like, you know, there's just a few pixels of padding off somewhere, right? Where it's, it's just like, it's one of those things where when you have the eye for it, you just see it. And I remember it took a screenshot of it, and I posted into Slack. And you know, I was still very new. So you know, I'm kind of like, Hey, everyone, like, you know, just just a little heads up, there's a little bit of padding missing here. Like that kind of thing, right? And I remember I posted this, and then right away the founder of the company, David Kramer, who, you know, on Twitter, just notoriously opinionated. I think he right away responded. And he said like, Oh, cool. Someone else that cares about padding. And I kind of right away was like, Oh, I think I'm in the right place. So Kent, maybe they kind of like answered kind of the tip of your question there. I think a lot of it tends to be cultural, where it's just kind of, you know, was embedded in the culture from a very, very early on time, right? Like I you know, I think when when, when they formed the company for a century was David Kramer and Chris Jennings who Chris was the designer, and David was the programmer. And I think, you know, they, they really just cared about making a good user experience. And so that tends to, I think, trickle through to just, you know, the initial hires, and then trickle through to the people that are working there, if you want to kind of like longer term, right? So these days, you know, I think we're around 300 People now. And I, I tend to still, you know, even myself, I'm still trying to fit in little micro animations here and there. So I think, while it is definitely something that's ingrained in the culture, you still do have to push for it, when you care about it, I think, and it depends how many people do care about it. Because it is, I do feel like it's a little bit of like a, like, almost have to have the eye for it, or something along those lines. So a lot of what I see these days is either it will come it will come kind of through AR or UX designers, where they'll kind of have these really great designs and kind of point out these little like details. And we have a few UX designers that actually will, you know, spend time and actually get into code and create these things. Shout at the viewer, he does an incredible job at sentry. But it also I think, just comes from, you know, the people building things or even just, you know, in code review, right, where I might, I might look at something and be like, hey, it looks really nice, but you know, what if we just put this little thing here or there and maybe the other the other way that I think these things can kind of be proliferated is just by making them easy to do. So, you know, we've we've built out a little bit of a component, component design system type of thing. And a number of them just have these things built in, right, where it's like, you know, you open the drop down menu in the chevron rotates really fast, right? Little things like that. But that said, you know, I think it's still it's, I don't know, it's it's honestly it's very much a mix at least that century. A lot of it does come down to just people caring, and like really caring about building something good and spending a little bit extra time. Or just from people just talking, I think, right? Like, you know, I'll sit next to a co worker and be like, Ooh, what if we did this kind of thing? Right? So, I don't know. I mean, I'd be curious about your guyses experience, maybe two.

</p>
<p><strong>Jem Young</strong><br />
I think one thing for me what century was known for besides like, monitoring, that's pretty well known in the industry. Was, like century was one of the earlier companies that I knew for a fact cared about developers, because like all of their marketing, but all of the way they designed everything, and everything I heard about sentry was like, That's company that's going after developers, they care about the developer experience, which makes sense, which like was, is a big historical departure from the way software is usually sold, which is like, you go after the CTO, the VP of engineering or, you know, really high up people. But instead, why don't you just give a good experience for developers, and then naturally, they start using the product and say, like, Hey, this is pretty good. Let me tell my friends, we tell my boss, etc. And it flows upward. And like, I can see that reflected in the culture that you're describing there, which is like, really, really strong attention to detail. And like that goes into a smile, micro interactions point. But overall, like it's cultural, like you care about the user, you care about the detail, because you know, the users, some of those picky people around front end engineers, and like they know, when you're not doing a good job where they know when something's not polished enough. And like, it's really it's wonderful to see that that work. And that take off, and that that culture still holds even today. Yeah,

</p>
<p><strong>Evan Purkhiser</strong><br />
no, I definitely think so. I do think, you know, it does get harder, I think, as the company gets bigger, right, I think but it really just depends on how you kind of manage it. Right. So for example, one of the things that we do at sentry is we have like a front end Technical Steering Committee kind of thing, where we just, you know, a bunch of front end engineers just meet every two weeks, and we just kind of talk about like, hey, like, how's the front end life kind of thing. And, you know, we'll talk about things that we want to make better, we'll talk about things that we want to fix. And, you know, that was kind of talking to you earlier, a little, a lot of these microinteraction, things tend to bleed into, you know, good user experience type of things, or even even I think sometimes, you know, I mentioned earlier a second ago about building micro interactions into UI components, right? We might get on the topic of like, Hey, how can we make our components better, and it kind of naturally just leads to like, like, hey, if we can do that, then it would be great, because then we can add this animation really, really easily. I remember there was a time during the pandemic where I was working far too much. And I think I spent a full night where I refactored, like, you know, 3030 instances or call sites of where our models were being used. And I refactored them so that they were using, like React context or something. So I could put the modal in one place, and then put like a animation presence around it. So I could add the really nice, you know, like, subtle fade in animation kind of thing, which is really hard to do when when you have models that are spread throughout your whole codebase.

</p>
<p><strong>Ryan Burgess</strong><br />
I also liked that you brought up the design systems tube, we talked about accessibility and how important things like that are, I think like the micro interactions we do, or we're just saying that there's value in them. And so I think when you put them in a design system, I think that's even where you really want to have that polish, because it's at that point, you're like saying, we've decided that this component is, you know, in a good spot to be reused throughout our code, base and throat areas. And then you also get that consistency too, which is really cool. You'd asked earlier about like how, you know, our companies think about it too. And like I think about a lot of what I've experienced on the Netflix product side, from a lot of what we've done for years is you're constantly iterating like you're doing a ton of A B testing, because you're, you know, you're able to see like, what works and what doesn't. And so you may not do those small interactions on something like an AV test, because you're iterating you're deciding, like, is this worthwhile, but when you start to almost like graduate something to a component library that's like, you're like, Oh, this is definitely living longer. And so that, to me really like resonated for me where I'm like, Yeah, you may not do that, and that MVP or that iteration, but it's kind of taking the time to go, Hey, okay, now we're taking the time to make sure that this lives in breeze, you know, that's refactoring, making sure that it's scalable, shareable, all the things at that same time, let's add some of those micro interactions. Like I think that's really where I see it play out.

</p>
<p><strong>Stacy London</strong><br />
And Trello I have a lot of good examples of this because I think Trello did a really good job over the years of adding these just little subtle things that make things feel fun and nice and like and I think is a freedom and trust thing. I think gems to Jim's point about culture, it was part of it was in the principles. There was like design principles for Trello about like, make it fun. Like that was actually written out and talked about and then freedom so like people that could take time to add just that last little thing. And it wasn't about, oh, we have to ship on this date. It was like, Are you proud to ship this thing? Does it feel good? Do you are you, you know, taking just a maybe another day to like, add one more thing. That was fine. So it wasn't about deadline driven things, it was just like, yes, we want to get this out and get feedback on it fast. But also, let's take just a little bit of time and make it more fun, which I really appreciate. It sounds like a culture thing to like, if you talk about that, as a, as an entire team and company, you instill that it kind of keeps growing even when you hire people.

</p>
<p><strong>Evan Purkhiser</strong><br />
Yeah. And I think, you know, just kind of naturally when you're excited about it, and when you're sharing with everyone. It's not too hard to get other people on board. I think the hardest part tends to be just kind of really just the technical kind of aspect of it of like, you know, how do you make these little things work? Right? Because it certainly isn't, you know, a lot of times, it's not that simple, right? You know, I mentioned framer earlier, because I think that it has actually made it quite a bit easier. But, you know, I'm sure you guys can remember the the days of, I can't remember the exact name of the library, but it was like React animation, something like damage and help or something like that, where you just had to manage all this extra state to keep the thing mounted before it would unmount. And, you know, we're just talking about React now. But you know, I think even even before that, it was hard. And then if you even think back before, like, you know, CSS animations were a thing it was, you know, I don't know, I came from the days of like, I was certainly building flash animation websites in like, 2004. And thinking it was the coolest thing ever. So

</p>
<p><strong>Ryan Burgess</strong><br />
oh, man, the days of even like Flash animations where you'd make those like big intros, right. But then you'd start to add the skip button. And it's like, everybody was just skipping that animation. But comm companies are paying so much money, because they're like, I need this, like, I need this for my site. But yes, I totally remember that that is not a micro interaction that is like, full on, like, you know, a movie. Yeah, like Mega interaction. I love that, Stacy.

</p>
<p><strong>Evan Purkhiser</strong><br />
Well, you know, I almost wonder, you know, what are kind of the micro interactions of like, the olden days of the web, because you know, another thing when we talk about like, just the that era, it's like, I remember spending all that time to make like the table rounded corners where you'd have little get Oh, my God, yes. Corner. And it's like, is that? Is that like a micro thing of that?

</p>
<p><strong>Ryan Burgess</strong><br />
That's a Yeah, that's a good point. Because also animations like outside of flash at the time, that was like, it was almost like even JavaScript was just not really usable at that point. And so it was really difficult. You had the

</p>
<p><strong>Evan Purkhiser</strong><br />
the clock that would follow the cursor? Oh, yeah, it was that was the animation.

</p>
<p><strong>Ryan Burgess</strong><br />
The sand clock, right, like the timer? Yes.

</p>
<p><strong>Evan Purkhiser</strong><br />
That's all very old. We are now. Yes.

</p>
<p><strong>Ryan Burgess</strong><br />
But you don't want another one that I don't know that I would consider a micro interaction. And I'd be curious on all of your thoughts of it. And I don't like it. I think it was a bad thing that we did as front end engineers. And it wasn't that long ago, parallax scrolling. Granted, I gotta give credit to a few companies who did it where it was like, it was almost like bringing you in and like doing some subtle animations as you scrolled, that like made sense. Like it added value. Most times people were like, I need parallax scrolling, I'm just gonna slap that on it. And it was just obnoxious. Like it got I'm so glad I don't see that very often anymore. But I don't know. Is that a micro interaction? Apple still

</p>
<p><strong>Evan Purkhiser</strong><br />
does it a lot. Right? I feel like Apple does. Yeah. Every new product page? Is that a micro interaction? Is there a macro interaction? Is that a thing?

</p>
<p><strong>Ryan Burgess</strong><br />
We're coining it? I like it a macro interactions?

</p>
<p><strong>Evan Purkhiser</strong><br />
I don't know. I mean, I feel like it's definitely not to me a micro interaction. I definitely agree that it's there at least it's can be very overused, right. And you know, it's funny, because I was, as you're saying that was kind of thinking about how I feel like we're I don't know if it just some of the newsletters I'm subscribed to. I'm subscribed to this one newsletter right now. Where it just they like a listing of like these maximalist websites, but it's, it's interesting, because because I feel like that that kind of stuff is still happening. Like, you can still find these websites that are just like, almost over the top, but using kind of like a bunch of modern technologies. So it like it works really well, I guess. But it's, I don't know, it's interesting to me that that's kind of coming back a little bit, or at least some of it, because I feel like there was kind of a period where we just stopped a lot of that. Right.

</p>
<p><strong>Ryan Burgess</strong><br />
So, Evan, we were talking about like, how you approach adding the micro interactions or like who kind of pushes us in the company and one thing that started to stem for me is like even as we talk like you mentioned is like century gets bigger as a company it might get harder. I Think about buy in, right? Like buying is unfortunately, sometimes like you have to have impact, you have to demonstrate that for all the things that we do. And and and rightfully so like you want to make sure as engineers, we're focused on focusing on the most impactful things. Is there a way in which you can measure the impact to users?

</p>
<p><strong>Evan Purkhiser</strong><br />
You know, so as I, you know, as I've kind of been talking about this, I feel like maybe there's a little bit of a backbone that I had here where it's like these things, I think, and I think probably maybe we all think this is that they do make the user experience better. So kind of, logically, it would kind of follow that, like a better user experience is happier users means they're going to use your product more means they'll pay for your product, right? Or, you know, what, however, it's monetized. Right? So like, all that follows, logically, but I think it does tend to be pretty difficult to measure kind of, it's like the happiness, right? It's like, how happy do people feel? Right? Because, you know, you can certainly measure, you know, just the the high level metrics, where it's like, if I put all these micro animations do people pay for us faster? thing, right. But that's, that's really hard to measure, right? Because there's such small things, and they have such small impact that, you know, unless you're at just this massive scale, where like making these little changes, you know, Facebook, or Google or whatever, making these little changes truly does impact to any sort of measurable degree, I think it does tend to be really, really hard. So yeah, so it's like, on the question of buying, it kind of feels like, how it almost ends up having happened, or at least how I've kind of felt like it's happened at Century is that just kind of up through the chain, people just kind of understand that these extra little touches do make the user experience better. And that is a valuable thing. And even though it can be really hard to measure, it still tends to be worth it. And again, that it's hard, because, you know, I'm definitely dodging the question here of like, you know, how do we, how do we actually, you know, present this as, like, look, this will make us more money kind of thing. And I definitely be curious to hear kind of all your opinions on this. But to me, it's like a craftsmanship thing, right? Like, I tend to take a lot of pride in what I do, I tend to really, really care about making a really good user experience. And, you know, honestly, it's like, I love doing what I do, because I have the opportunity to do all these things, right? So if a company came down on me, you know, if I was working at Century, and, you know, our, our lead UX designer was like, Alright, have a no more micro interactions, like don't waste time on that, and, you know, start questioning things, right. But you know, at least at sentry, like, you know, we do care about that. And we do have, you know, people that are behind us that are higher up that are, you know, saying like, these things are good kind of thing. And then, on top of that, at least for me, and I definitely don't think this is great, but I tend to just spend the extra time because I want to because I care about building something that's really good. And because I just kind of get a lot of enjoyment out of that. And it, it especially feels quite good when you build something like that. And then you have people like, mention it or comment on it or tweet about it. And they're just like, oh, sentry has this like, Great, awesome thing, right? Or, you know, whatever it is, I think there was a few tweets that we had about our onboarding experience being really nice. Funnily enough, actually, the thing that we get tweeted the most about, it's not a micro interaction, but it's the maybe it could be it's it's the loading spinner under it. When sentry is loading, it says, Please wait while we load a massive amount of JavaScript or something like that. So many tweets about that. It made me like, at some point, someone was like some, yeah, someone was like we should remove that makes the product sound bad. I'm like, no, no. Not not when you're

</p>
<p><strong>Ryan Burgess</strong><br />
speaking to the engineers. Yeah, like people appreciate that.

</p>
<p><strong>Evan Purkhiser</strong><br />
Yeah, but yeah, I'd be curious. I don't know. I mean, what do you guys think is is there like, how do you kind of measure this? Or how do you present it in such a way that, you know, can convince your, your high rep MBA person that these things are worth it? I mean,

</p>
<p><strong>Stacy London</strong><br />
I don't know if these feel like measurement on this stuff is very difficult. A CSAT is something that we do, I'm not sure if if you've ever had those, it's like the satisfaction thing like, Hey, would you recommend this to somebody and, you know, Trello, has incredibly high CSAT scores. But some of the other products in Atlassian are not as high. And I've always kind of, I personally thought about, like, what is that? Why, you know, what is the difference between those things? And it's, it really, it's not one particular, you know, micro interaction, it's like, the entire experience rolls up into this idea of like, Yes, I enjoy using this product, it helps me get things done. I would recommend this to somebody, but like that is still fuzzy. It's not saying like that particular interaction you built, contributed directly back to that. It's just this overarching sort of measurement that gives you some signal.

</p>
<p><strong>Evan Purkhiser</strong><br />
Yeah, if you're, if you're starting from ground zero, where you know, you have none of these nice little touches, it can be really hard to, you know, because you kind of have to get to that tipping point where the product goes from being like it's fine to like, Oh, this is nice, right? And then that satisfaction score that you'll see stack goes up.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, I think unfortunately for me, I think it's like, mostly it is qualitative. Like, it's a you can ask and kind of, like, there's probably ways to quantitate it, but it's, it's just top Avenue mentioned, like, it would have to be like a lot of traffic, you know, an AB test to like, measure does this interaction actually, you know, move the needle for someone paying us or signing up using the product that, you know, that's, that's a hard one, it's like, those little interactions are really tough. I definitely think that there's qualitative, but I, I also like to have and what you said even in the developer happiness to like, I think that that not even the customer side of it, I think that there's gotta be something to be said about having your engineers and designers and everyone feeling fulfilled with the product they create. And, and that's very squishy. Like, that's not a hard measurement. But I think that having a really strong culture and people happiness there, and it's not going to be the micro interaction that like, makes or breaks it but like you said, is like they start taking that away. You know, you've been at sentry for a long time that tenure might start to draw across the company of people stain. So I think like, yeah, it's a tough answer or something to answer. But yeah,

</p>
<p><strong>Evan Purkhiser</strong><br />
there's probably a broader topic there. Because I kind of think about that same thing, with just generally the whole kind of like health of sentries code base, right? Personally, and I might be biased here, I think that our front end code base is actually a lot better than our Django code base. Every time I'm in there, just like, Oh, my God, how does anyone get anything done? Like that kind of thing? And so, you know, I don't know, it's like, it's, it's hard, right? Because like, if, if things deteriorates, slowly, it's hard to see that happening, right? But it can get to the point where it's just like, oh, no, this is less good. Now, it's less nice to work on this kind of thing. Right? And it kind of the same way, the other direction, right? You really have to kind of look at the, you know, the long tail of it, right? Like, you know, has Have things been improving, right. That's, you know, I mentioned earlier, that's why we have the like front NTSC, where we can just talk about these things, and make sure that we're happy and make sure that we're doing things that you know, we care about, to the degree that we're able to right, like, obviously, we can't just be like, Alright, everyone, we're just going to only work on, you know, micro interactions or TypeScript migration for next month. Like he just can't do that. Right. But we know that I'm curious,

</p>
<p><strong>Jem Young</strong><br />
what are what are some examples of bad micro interactions, or micro interactions, say, poorly timed, poorly implemented, things that kind of frustrated annoy the user, rather than bringing the light? I mean, I

</p>
<p><strong>Evan Purkhiser</strong><br />
think we mentioned earlier, you can definitely have, you know, too much, right. Like, if too much stuff is moving at, you know, I know, people that just completely turn animations off, right. I think like, that's an easy one. It's just like when too many things are happening when things are fading in and out when, you know, hover animations are extreme. Right? If anything just takes too long. I think people can be particularly sensitive to that. That's probably one of the biggest ones is anything that just takes too long. I'm sensitive to that, right? Where it's like, I want things to happen fast, right? Which I think they can help with. And that's a flip the question around but you know, if something moves really fast, and it kind of tends to feel faster in some ways. But I don't know what would be like a good I think, I think maybe just that kind of broad category of just like things being slower because of it is probably a bad example of, or an example of something that's bad,

</p>
<p><strong>Stacy London</strong><br />
like overdoing the interaction. Like maybe the micro interaction is adding like a tiny spinner while it's in a loading state. And every you have a bunch of different teams working on a single page, but they're all adding these spinners and pretty soon the whole pages spinners, like at its at its initial inception, that spinner was good. It was like okay, making me understand that I need to wait, it's a tiny little thing, tiny little animation, but then the whole page is like, all spinners and you're like, This is not gonna

</p>
<p><strong>Evan Purkhiser</strong><br />
feel like I just, I just joined one of centuries, typical TSC things where we talked about this, but

</p>
<p><strong>Jem Young</strong><br />
in my early career, it's an important lesson. And once you once you see it, you won't be able to unsee it now. We learned the lesson. Don't use your company logo as a loading spinner. Because if it's loading all the time, and it's slow, people will associate that with bad feelings. And like people get really angry seeing the loading spinner all the time. Hence, nowadays, I think most UX designers know that. So you don't see company logos as a loading spinner anymore. Because early on we learned, you see that loading spinner you'd like you get so mad, you're like, why is it still loading? I hate this company and like it's one of these weird things that you won't know until you actually study it. And like the history of the internet, we've kind of forgotten about the how we've gotten here, but that was an early, early lesson on a bad micro interaction, I suppose. And then the other one is fake. loading screens. Yeah, like, I hate fake loading screens like don't? Yeah, if it's just automatic, just don't show it to me just let it let it go through. But don't give me something fake. And it's like stalker. It says it's done. And it's not done because like it's not tied to anything. i Those are examples of maybe some bad micro interactions that I've come across.

</p>
<p><strong>Evan Purkhiser</strong><br />
Yeah, I mean, that almost kind of ties into like the dark pattern things, right? I'm sure there's some examples of like dark pattern micro interactions, that can that can be another Google that later. You mentioned the the company loading spinner center actually still uses the century logo as its initial loading spinner. Now that you said that, I'm like, oh, geez, I gotta talk about this people tomorrow. I think it's tasteful. I don't know,

</p>
<p><strong>Ryan Burgess</strong><br />
initial initials, probably. Okay. I think it's more like that. If it's like every page or everything interaction you're trying to do is probably that negative feel like waiting for, you know, a single page app to load. It's like, that's probably not so bad. Because I think when Jim said that, as a gather, you're really right. If it's this loading all the time, even if a small, that would be the tough thing.

</p>
<p><strong>Evan Purkhiser</strong><br />
Do you guys think that the I guess you mentioned this, the skeleton loaders is that overused these days,

</p>
<p><strong>Stacy London</strong><br />
I think when they're over, when the animation is too intense on those when it's like the, the dark, where it's like slowly fading across the screen. But if it's too dark, it's just I don't know, there's like, there's subtlety in doing those where you can make them not as obnoxious.

</p>
<p><strong>Evan Purkhiser</strong><br />
It's, it's so subjective to all of this, right? And a lot of it it's like, you know, I hate these this word, but it's like comes down to like, kind of taste right where it's just like use you know, another another story that I I like to think about with this kind of stuff is like I kind of remember way back when I was like learning web design, and just like building websites and just copying what other people were doing. And I remember one of the things that I kept copying was you would have a border, and then under it, you'd have like a lighter border to give this like slightly inset look and was really popular and like the two dozen for error. And I couldn't figure out why. Like, I knew how to do it. But I couldn't figure out like what like I knew it looked nice, but I couldn't figure out why kind of thing. And it's kind of the same thing with this where it's like, I know this feels good. But I don't know why kind of thing I think and when you're able to answer that it helps you to be able to, you know, better. Better know what things will or won't work. Like just overall right?

</p>
<p><strong>Ryan Burgess</strong><br />
All right, that's probably a good time for us to dive into picks. In each episode of the front end happier podcast. We like to choose topics, the things that we find interesting, sometimes related to the episode topic often not. Stacy, do you want to start us off?

</p>
<p><strong>Stacy London</strong><br />
Sure. I've got two couple of calming music tracks for picks tonight. First one is called when you were a child and I was young by Indian Wells. He made this track for his daughter's third birthday. And he said that he imagined a fantasy world with a children's theme. Something that sticks with her and kind of reminds her of that time with with him like as she was a young child. I thought that was very sweet. And it's a really good, good track. Spirit loop by rival consoles. This one's just built around a piano loop. It's kind of I guess, tying into a show about aesthetics and things. It's a minimalist like freeform minimalism, Lo Fi kind of track. Both of them nice background choices while you code

</p>
<p><strong>Ryan Burgess</strong><br />
right on. Jim, what do you have for us?

</p>
<p><strong>Jem Young</strong><br />
I've got one pick, it's an article in Slate. It is about car manufacturers bringing back buttons. So this is like been a great for me for such a long time about things. Manufacturers moving to touchscreens for everything, which I think is ridiculous. Like you're not allowed to use a cell phone. But somehow you're allowed to create an interaction where I have to look away from the driving to like, turn on the air conditioning with a button or with the touchscreen or something like that. It it's kind of crazy how we've just let it happen. I don't know. I definitely can blame Tesla as this one for and other manufacturers followed along. People feel like a touchscreen is more premium. But the irony is touchscreens are actually substantially cheaper than buttons and car manufacturers. So they're all like yeah, touchscreen, touchscreen, everything. Because it's so much cheaper than a button. But thankfully, there are a few car manufacturers that are bringing back buttons because they've discovered that touchscreen is a terrible user interaction. You can't memorize anything. You're not going to memorize what your hand is you you look away from the from driving, just to do basic functionality. So that's why that's my pick is I'm this article in sight about manufacturers bringing back buttons, but overall, yeah, we don't need touchscreens in cars. It's fine for some things, but come on. They'll be cheap car manufacturers. I love it. That's my pick.

</p>
<p><strong>Ryan Burgess</strong><br />
All right, Evan, what kind of picks do you have for our listeners?

</p>
<p><strong>Evan Purkhiser</strong><br />
Can I self promote?

</p>
<p><strong>Ryan Burgess</strong><br />
Absolutely. All right, no shame in that.

</p>
<p><strong>Evan Purkhiser</strong><br />
I've got a few things then. I found that newsletter that I mentioned earlier. The the one with kind of the extremist or extreme. What is it? I think that's the right word. The more extreme websites the maximalists, that sort of lever, if I'm the newsletter earlier that has the more maximalist maximalist websites called Set studio. Check it out. They have a really nice newsletter that I think it's like every other week and it just really cool little you know, a lot of it tends to be designed for your websites. The other thing I mentioned earlier that I think maybe I wouldn't make a pick would be frame or motion. Check that out if you use React and you want some nice animations. Obviously century please come check us out. And then maybe a little self promotion for myself actually DJ on the side. I have a I have a SoundCloud I play trance music. So if you're looking for something completely the opposite of what Stacey suggested. A little more upbeat around 130 ish bpm. Please come check me out. SoundCloud slash I think I'm Oh, man. I'm doing that thing. Now. I'm like self I'm hardcore self promoting. I think it's just slash per Kaiser. Por que je ser

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Thank you. That's great. I have two picks for this episode. One is TV show on Netflix. Watch this a really long time ago, it's still fairly new. But one I don't think we've shared it's beef. Such a good show of basically just two random people that meet and just not end up not liking each other. And it is a really great show really well done. Highly recommend that one. And then I've been listening to a podcast on the Twitter drama. It's called flipping the bird. I think they only have like, four, maybe five episodes so far. But it's interesting, because it's like not that long ago that all this has happened. I mean, it's still going on that there's a lot of drama there. But it's interesting to kind of hear it told us a story and in some ways, painfully relive some of the things that people have gone through, but they do a really good job of it and I highly recommend checking that one out. Evan, thank you so much for joining us. It was an awesome topic talking with you. Where can people get in touch with you other than obviously listening to your SoundCloud? Where can they get in touch with you?

</p>
<p><strong>Evan Purkhiser</strong><br />
I mean, people are definitely free to email me. I've been precursor at Gmail, but you can also do every professor at sentry. I think I am on Twitter. I'm on GitHub, kind of all the usual places. Love to talk tech. So you know, please hit me up.

</p>
<p><strong>Ryan Burgess</strong><br />
Awesome. Well, thank you all for listening to today's episode. You can find us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a> you can really subscribe to us on whatever you like to listen to us on we are on actually SoundCloud as well. Yeah, any last words?

</p>
<p><strong>Evan Purkhiser</strong><br />
I appreciate you guys having me. I really had a lot of fun. So thanks, guys. Thanks for coming on.

Cheers. Cheers. Cheers, guys. Cheers.

</p>
`;
        return transcript;
    };