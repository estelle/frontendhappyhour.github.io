// Episode 77 transcript
module.exports = function() {
  'use strict';
  const transcript = `
  
<p><strong>Jordanna Kwok</strong><br />
Welcome to a brand new episode of the front end happier podcasts. Today we are joined by our special guest jordanna from Netflix to talk with us about various solutions for building a native mobile application. Welcome jordanna thank you for joining us. Can you give us a brief introduction of who you are, what you do, and what your favorite happier beverages?

Hello, my name is Jordanna and I am a UI engineering manager at Netflix. My team is responsible for building the iOS application

for Netflix all the people using and watching Netflix your team is responsible for doing that.

Yes, primarily the member experience. So anything after Member login to the application. Awesome. Well, thank you for joining us. And what's your favorite happy hour beverage? I think it would just be a simple gin and tonic good choice.

Yeah, I knew john was gonna say like, he's a big fan of the gin and tonic as well. In each episode of the front end, happier podcast, we like to choose a keyword that if it's mentioned at all, in the podcast, we will all take a drink. So what did we decide to use keyword is cross platform. All right, so from now on, if we say the word cross platform, we will all take a drink. Well, let's jump right in. My first question to both you all to all of us is what's the difference between a hybrid and native mobile application

think a hybrid application? least you know, I guess a popular interpretation of a hybrid application is really one where involves a WebView that is embedded within a wrapper application.

Right? So you can still write client side JavaScript that we would do on the Web. But now we can load this in the Apple iOS or Android application.

Yes. And then there would be a bridge into the native side of things that the JavaScript code can

access. And then that would give us the advantages of being able to take advantage of the camera or calendar or any of the amazing application, things that we take advantage of on the iOS and Android side. Yes. And to me like one things I always think of like when I'm what is a hybrid app? I'm like, well, you have a lot of great options. You could be writing that in like Cordova or ionic. The new Google one is flutter, I guess, React Native and flutter ours.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah. Are those hybrid apps? I was just gonna say, yeah,

</p>
<p><strong>Jordanna Kwok</strong><br />
I think the question is interesting. It is an interesting question, because I'm almost saying those are more a lot closer to a full native view, versus like a web view. You are, that's hybrid, you're dealing with a bridge, you're dealing with the web based code that is now producing The views and some of the interactions that are happening on the UI. But yeah, React Native and things like flutter?

Yeah, they are. They are, you know, the underlying kind of code that it is using to render is actually fully native. Yeah. So, you know, what do you call that? Is it kind of partial native, or is it pseudo native? I've seen those terms. Yeah,

I wouldn't call it hybrid, though. Like, I think we can call it out or it's outside of that category. It's like, I like the partial or pseudo and then we're to some his phone gap. Still a thing? Pretty sure.

Okay. Like I haven't, I've not Yeah, kind of really kept up with some of those WebView options. Because, yeah, they've been around for a while. And, you know, because of these new things like react, native flutter, kind of coming, you know, into the community. People are just like switching over and maybe maybe it's possible that, you know, some of the old web view options, kind of like, you know, are maybe the communities are shrinking a little bit Don't be surprised. I wouldn't

be surprised either, because now you're actually getting, you know, that pseudo native application and getting a lot closer to a full native view with JavaScript, leveraging something like React Native. So I wouldn't be surprised to that. I guess like Cordova kind of fits into that category as well. We're when I hear people talk about the WebView implementation, I hear Cordova a lot more than I've ever heard PhoneGap recently, so that's why I was like, Is that still a thing?

</p>
<p><strong>Jem Young</strong><br />
I don't know. I think there's three types. There's like, native native ga and what you would you call it earlier, fully native, fully native. There's fully native as like written, written for the fragrant insert Objective C swift for iOS, Java and Java or kotlin. For Android. Then there's hybrid, which is like a native app with a WebView. Some parts of a WebView some parts baby native, then there's that weird in between where something's compiled down to native, but it wasn't originally. So like React Native is a good example. Yeah, it wasn't originally written on Native native.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, native Native fully native.

</p>
<p><strong>Jem Young</strong><br />
Yeah, I don't know. It's called that.

</p>
<p><strong>Jordanna Kwok</strong><br />
So there's like, we know, I think we've made three buckets right there. Yeah. The compiled down. One might be the pseudo or partial. Yeah.

</p>
<p><strong>Ryan Burgess</strong><br />
So those are your three buckets.

</p>
<p><strong>Jordanna Kwok</strong><br />
And I feel like, you know, some of the non fully native solutions. And the reason they kind of exist to me seems to be around, you know, kind of write once run anywhere. cross platform solution. Yeah. Cheers. Cheers.

Okay, I think we've well defined it, because that helps. Like, I think it's it's important to understand the various buckets that are out there when thinking about a mobile application. And I don't think you have to necessarily be I think jordanna you touched on is like, you don't have to be one or the other. It's like, it kind of can fit in that realm of hybrid where you can have portions of an app fully native. You could have it be sudo with React Native. Or you could also have some web views in there. That's happened. More of the hybrid. So I think you're not bound to one or the other, which is kind of nice, too.

</p>
<p><strong>Jem Young</strong><br />
Oh, we didn't even talk about the fourth bucket, which is progressive web apps, which are completely WebView, native at all.

</p>
<p><strong>Jordanna Kwok</strong><br />
And that's true. And they're treated as an application look like an application. They can look and feel like an application. There's no, there's no browser Chrome. It is really made to feel like an application, which we've talked about progressive web apps on previous episodes. And we have almost put that in that bucket. So you're right, Jem, we should have added that in as a bucket tiers, there's four or more buckets,

</p>
<p><strong>Jem Young</strong><br />
it's hard. So I think I think what people would want to know is, I'm starting a company tomorrow, which solution Do I go with? Because they all have pros and cons? Oh, absolutely.

</p>
<p><strong>Jordanna Kwok</strong><br />
And I think that's what this discussion definitely is about, is I don't think there's an answer. Like, I truly don't believe there's a right answer. I think there to your point, there's trade offs and it's really understanding what are you trying to achieve in the short Work term, also the long term, because your short term might be to ship something very quickly to both iOS and Android. And you have a very small team. And you might rely on something like a web view implementation. Or you might rely on something like React Native, because it gets you a lot closer to being right once it's not perfectly right once, but it's very close to that versus writing fully native Objective C, or swift or Java or kotlin. On the Android side, but I think that always goes to my head is like, you know, what does the team look like? What's the skill set? And then, you know, how do you scale this app and hide like, is it short term to get it out the door? Or is it like the long term of performance and longevity?

</p>
<p><strong>Jem Young</strong><br />
Well, let's start at the top. Yeah, easy enough. So fully native German, you could speak best to that. What are what are the pros and cons of writing Objective C or kotlin, or Java for your app?

</p>
<p><strong>Jordanna Kwok</strong><br />
Yeah. So one of the barriers To entry for some of these kind of native apps is really the development environment. You know, for iOS, you would have to use Xcode, which is something provided by Apple,

</p>
<p><strong>Jem Young</strong><br />
and only on OSX was made no effort to make a Windows version of Xcode.

</p>
<p><strong>Jordanna Kwok</strong><br />
No, no. And so you're there, again, you're writing on a certain machine now, like you're stuck to that.

Yep. And for Android, you'd use Android Studio. I believe there is, you know, both Windows and Mac versions. So a little bit more of available to developers. And the language itself, there's two choices for both currently. So on iOS, you can write in Objective C. There is kind of like an interesting learning curve to that language. It is actually you know, really built upon Java as a language, but it looks totally different. Yes. Even though they the concepts are very similar, it's just a lot a lot of people, especially if you've been doing JavaScript for a while, it's like a total turnoff. Like, ain't like, you know, the square brackets everywhere. semicolons. So, if you look at swift on the other hand, which is, you know, a newer language, I think it came, it was announced, like five years ago, maybe Yeah,

yeah. 13 or something. Yeah.

And it you know, it's not there. It's not stabilized yet. So, you know, it's still there are still changes to language that are breaking changes. But the syntax and the concepts are closer, actually much more to JavaScript.

Yeah, it's like looking at the syntax is reminds me a lot more of JavaScript, whereas Objective C definitely does not. I

</p>
<p><strong>Jem Young</strong><br />
looked at Objective C once and I looked at it and I'm like, I'm not going to learn this entire language just so I can build apps for one specific platform like it Just doesn't carry over to any other platforms. I don't know anybody else using Objective C for anything. I so correct me if I'm wrong, I thought swift was like, sort of deprecated people are not using as much because like the, the build is so intensive that people decided it was just too slow.

</p>
<p><strong>Jordanna Kwok</strong><br />
So I wouldn't say it's deprecated because Apple is still putting steam behind it. So they're still putting efforts to improve the build times or just, you know, with any languages, there's always improvements. And so Apple as is investing that and building out that language more, but there have been companies that have switched their thinking on it, or either haven't adopted it yet, or have adopted it and started to go back to Objective C because of some of the slow build times and I'm sure jordanna you can speak to that as well as even for Netflix of like us trying to decide when's the right time to invest in Swift. Or, you know, what does that look like?

Yeah, there have been a lot of developments.

Around swift and actually the swift communities is growing. It's not, you know, shrinking in any way. So, the mountain, it's actually an open source language, you know, it's backed by Apple.

So I should say it's coming out. Yeah. So they're pushing the power behind it. So

it isn't getting deprecated it's like older versions of it are Yes. So like, say you're going from version one to two, two to three, there are breaking changes. So if you had written something for version two, you would have to, you know, migrate to three. Version five is when it's going to be stable, at least according to APA. We don't know when this is going to happen. And that is when you know, most people will probably start thinking very seriously about, Hey, you know, now this is stable. We can like, you know, work on something a little bit more stable, but I do know a lot of companies have switched to it entirely. And, you know, it's like just a full migration over and then other companies are doing like, you know, Some hybrid approach

where they have some views written in Objective C, but some of it written in Swift. Yes. Yeah. So it'll be interesting to see how that plays out. Yeah. And the build times are supposed to be getting faster. I've heard

Yeah, so actually, they've I think they've kind of gotten pretty close with the latest version. And the thing that some people are thinking about are some of the side effects like, you know, the package size, like, How big does this make our app. And the reason why it's kind of bigger is because it has to, like, package up some of those, you know, swift libraries. Whereas once it gets, you know, fully stabilized, then it's going to be just part of the OS.

Gotcha. So it actually does take some investment from Apple at that point to include more of these libraries into the OS.

</p>
<p><strong>Jem Young</strong><br />
So the cons of fully native our developer environment is can be cumbersome, such as if you're trying to write an iOS you need a Mac to read it. I haven't solved both of those environments are foreign there. They're pretty hefty, and they're not trivial to setup. I mean, they're not that hard, but it's definitely it's gonna take a while the learning curve on specifically Objective C, what are some of the pros though?

</p>
<p><strong>Jordanna Kwok</strong><br />
Yeah. So I like to view the pros a lot from the angle of, you know, the product itself. That is part of like what you mentioned for like, hey, one of the things is you want to look at the goals, right? The objective of what you're trying to develop. And if you're trying to develop something that is, you know, very kind of like performance for that one platform, then, you know, this, this totally makes sense. Hey, you're trying to build the best possible on iOS, or the best, you know, app possible on Android. But if you're thinking, hey, I want to build you know, something that works for both works cross platform.

</p>
<p><strong>All</strong><br />
Cheers.

</p>
<p><strong>Jordanna Kwok</strong><br />
That Yeah, if you're trying to build stuff thing that works on both, then maybe, you know, native is not something that you'd want to invest in having to, you know, have to learn both, or even like, you know, build the team up to support both. I think that's the other aspect of it.

Having Android and iOS, you almost need at least one or two engineers focused on one on one or two on Android one or two on iOS. Versus in some of these other implementations, you might be able to get away with like one person almost shipping to both like, that's, that's, you know, the pipe dream, but I think you can think about it as like, do you have does your team support having not both platforms? jordanna Ryan, where you're back on the cons again? No, now we're talking about pros. Now pros. Oh, yeah. So another con is. Development is not it's not scalable. It's not as easily scalable as it is going other methods we can say, for me, it's the performance. So honestly, in the user experience, I think to me that time and time again, Think what do I think about when I think native? It's like those interactions that a user has? Do they actually feel really native? Is it performance? Does the app load immediately, those little things? Those are the interactions of the polish that you'll get with a full native implementation with some of these other implementations. There, they're good, but they're just not as good as the full native implementation. And that, to me is always the biggest selling point. Yeah.

And I think another one is reliability. Well, that's good. Because if you think about, like, if you were wanting to make an app that's reliable in like, really choppy network conditions, which mobile devices often are in, you probably want to think about how do I handle you know, offline conditions, persisting data, like with a progressive web app, you know, what kind of, you know, work would you have to do to support that it's a lot, you know, trickier than you know, with a native solution where you actually have access to a lot more More of the, you know, storage mechanisms on you know, the platform and maybe even like some of the network libraries and handling of those network errors.

Yeah. And another, even to the connectivity is always important of network. I even think about the initial download size, think something to really call out that's important to think about when you're using, let's say, like, React Native is a good implementation where we said it was like the pseudo native. So we're almost there, we're able to write JavaScript, but it's not full, full native. Well, even something there for React Native, it's gonna feel fairly native like, but it comes at a cost there too, is you now have to add an additional library to your app binary size, which maybe in certain parts of the US were like, yeah, you know, a couple. Meg's is not a big deal to download an app. But you're thinking about someone who may have bandwidth constraints. That's a huge amount of additional bloat to add to your app, just to add the library. That's before you've created User doing any work. And so I think that that's a positive on the going full native is you're going to build it at a smaller app binary as well.

</p>
<p><strong>Jem Young</strong><br />
Yeah. So okay, so sum up fully native development is going to be harder, I'll just sum up all those points development is going to be much more difficult finding developers who can do native. Those are the costs. That's the con, the Pro is, it's going to be the most performant type of app you can build. debugging should be easier, because there's a lot of tooling built in and reliability should be better because you can build for all that. And most of all, you can take advantage of every single one of the device capabilities, which is not true for other platforms.

</p>
<p><strong>Jordanna Kwok</strong><br />
Yeah, I mean, to touch on that a little bit is you can always opt for adding like jordanna touched on the bridge. There are ways that you can talk to those native features that in the OS, you can write some actual native code that will work with that hybrid web view or, you know, our React Native implementation. There are ways, but I think it goes back to it's just it's not out of the box. It's it's going to take some additional effort. And the debugging is obviously going to be harder because you're, you're now dealing with different layers and passing back and forth between over this bridge.

</p>
<p><strong>Jem Young</strong><br />
So what about hybrid apps? So something that we decide on hybrid apps being like native or flutter, something that compiles down from another language to native code?

</p>
<p><strong>Jordanna Kwok</strong><br />
Yeah. So your your React Native, your flutter, your web view, Cordova,

ionic. There's actually two more that I can think of that we haven't mentioned. All right. So these are more around game development. You know, unity, for example. Yeah, it is a cross platform.

It's a cross platform. Game Engine.

Yes. I forgot about unity. That's a great point. And,

you know, with the unity, if you think about like some of the pros and cons. It is a propriety. attari platform so, you know depending on what you're trying to build, you would have to pay for a license to actually use it. It is C and c++ so you know that is a very I guess a cross platform language cheers

I feel like Gemini should be saying cross platform or Cheers

</p>
<p><strong>Jem Young</strong><br />
Cheers. So a con would be you are now dependent on some other company or whoever maintains that that bridge or compiler wherever you want to call it so like fire right React Native I'm dependent on Facebook who maintains React Native to fix those issues that I have?

</p>
<p><strong>Jordanna Kwok</strong><br />
Or it's open source community? Yeah, I was gonna say it's like, you could go out and add in the feature or support that or say like Android or an iOS both ship a brand new feature that now you want to take advantage of, or someone in the React Native community is going to have to write that featured React Native to now be able to support it. You could be that person that does it by To cost because now you have to go do that, or someone else in the community does. I

</p>
<p><strong>Jem Young</strong><br />
think another con would be because you're not the code that you're writing is not the code that is running per se, you still need to have some experience in how to debug a native app. Because at some point, you'll be like, well, is this a bug in my code? is a bug in the way it's compiled down? Or is it a bug in like the actual device itself? And so you still need some experience? Like you can't just say like, Oh, I'm gonna write React Native. I don't need to know anything about Android or iOS. You still need to have some sort of knowledge there. I completely agree. You definitely need it and also now that made me think about it too, is to draw down is like point on the fully native is that you have to have these like Android Studio or Xcode. Well, guess what? With React Native, you need that too. So like you're not you still need those installed. You're not totally getting away from it. Another another con would be you don't you mentioned earlier, but you don't have full access to the devices cable. abilities. For instance, we couldn't run, meet React Native for our netflix app itself, because there's DRM protection and things like that, that I don't believe are accessible through when you compile it down. So it has to be written natively. Is that correct? Yeah.

</p>
<p><strong>Jordanna Kwok</strong><br />
So so with React Native, it's, it's interesting, the way it's architected, it doesn't really compile down. So what it really does is when you're writing JavaScript, it runs in a JavaScript VM. So on iOS, it's like JavaScript core. And that passes, there's actually a bridge here, the messages over to the native side and there is a corresponding kind of set of code in React Native, but written in Objective C, that kind of, like, interprets that, you know, message and kind of, sometimes it's a one to one match almost to a native implementation. So you could expose it, you could say, Hey, I have this like, you know, video player. I'm just gonna, you know, use that as an example that I read. To expose on on the JavaScript side, and that would work. So you could just go in and, you know, add a lot of these components. And you know that there's a tax that and right that you're, you're still developing native, then re exposing it to JavaScript. So that is a, you know, at least with React Native one of those costs, I believe, with flutter, for example, it's a little different the way you know, it's done there, because there isn't really a one to one kind of, kind of implementation. Dart does get, you know, compile down, like you said, and that is a different rendering engine that they've, you know, they're using under the hood, I believe it's called skia. See, yeah,

</p>
<p><strong>Ryan Burgess</strong><br />
I have not heard that. So skia

</p>
<p><strong>Jordanna Kwok</strong><br />
is actually, you know, something that Google develops, I think they use it for some things like Google Chrome and some other things, you know, across some, you know, Google solutions, I guess, but it under the hood at us As OpenGL so it is using like a graphics API's to actually do the rendering. So it's not like, Hey, I'm mapping one view to another native view. It's like they're just drawing it from scratch. Interesting. Okay, that actually makes a lot of sense. And even understanding the difference between flutter and React Native.

I mean, I can see some benefits to both.

Yeah. So yeah. And it's like four, I think in, you know, if you're writing something in flutter, then, you know, you're probably it's still going to be backed by some kind of like native code there, but not in the same way.

So that's a pro. So I can theoretically write once for two different platforms, and it should compile and run in a VM or whatever is the underlying mechanism. That's a pretty big Pro. You don't need as many developers to develop an absolutely and I think I like react natives approach to what that's called, as they say, it's, it's not a right one solution. But I always think about it. It's fairly And where the differences are there is that Yeah, you might have to implement one feature very specifically to Android, and very specifically to iOS, but say like 80, or 90% of the app can be right once, and you get that cross platform support.

Cheers. Cheers. Cheers. So both flutter and React Native, have a declarative UI. So it's very, it's very different. Instead of like using an imperative way to write your UI, it's very declarative. With React Native, it's, you know, like you're writing react. Yeah, web code. Similar flutter. Similarly, flutter does something that looks very much like it.

Yeah, I'm glad you brought that up. And also, another point to that, is that I think sub there has been some misunderstandings that sometimes people think if they're writing react JavaScript on the browser, that they can then just ship it to React Native. They're different. In the sense that they're they're very similar, but the views are actually written different. You're not writing divs, you're actually writing native views in the React Native side. So it's not a write once for web, iOS and Android. So I think that's something to also call out. I think,

I think the power with declarative UI is that you're writing in, you know, a way where you're describing the UI and not really like mutating it, you're describing, hey, this is what it looks like, here are things that are going to change, like, state, you know, props, right? And then that affects how the UI looks versus Hey, I'm gonna, you know, take this instance of this view, and then, you know, kind of manipulate it, you know,

</p>
<p><strong>Jem Young</strong><br />
directly. I always get confused on declarative versus imperative. I always think of something like, react, reading something react is declarative. Like, this is the thing that is going to be rendered exactly like this. Maybe not exactly, but Pretty close, versus something like SQL is imperative where you're like, I want to select all these things and get this, but I'm not directly doing that. I'm just like hoping the underlying engine, like, pull smart enough to do what you asked it. Yeah, that's always like my go to on like trying to describe both of those in my head.

</p>
<p><strong>Jordanna Kwok</strong><br />
And I do find that like with a declarative approach, it does lead to kind of less uncertainty around, you know, the bugs and things that might come up. And usually, sometimes if you mutate something, some weird side effect happens, like, you know, three layers deep and you don't realize it. Whereas, you know, something with declarative is less likely to happen.

</p>
<p><strong>Jem Young</strong><br />
I'm anti magic. And that's like, imperative programming tends to have a lot of magic in it. And I'm like, why did they do this? Oh, because it just works. Everybody knows. Well, most people know I'm not a fan of Ruby on Rails, because there's a lot of magic in there that I just, I'm sure if you get it you're really proficient at it, but like I I prefer to see like this, this, this and this, but that's just me. Oh, I just thought of it yet.

</p>
<p><strong>Jordanna Kwok</strong><br />
Another one. Oh, awesome. Hot reloading. But

yeah, both flutter and React Native support hot reloading.

</p>
<p><strong>Jem Young</strong><br />
Yeah. And hot reloading is amazing. That is actually a huge selling point the just to be able to develop and see those changes immediately. That is huge. The pain of recompiling every single time hoping your machine is fast enough to recompile Alright, so pros of pseudo native I think we've we've landed on pseudo native development just gonna be much easier. debugging may not be easier per se but developments can be much faster. It's much easier to find someone who can pick up flutter or React Native or something like that. The cons are, it's not gonna be as performant as fully native.

</p>
<p><strong>Jordanna Kwok</strong><br />
That's debatable among the community. Okay, depends depends on the use case.

Yeah, the cons also the the binary size increase because you're now adding it in digital library, especially on Android. It actually gets a lot larger than even iOS. It is still an abstraction. It's not fully native. So there's always like the, I guess you said the debugging and it is an obstruction. You're also waiting for the language to support certain features. Or you have to be the one to go write that and pave the way. Alright, so I'm also interested, we've talked about the pseudo, and then the full native. What about the hybrid, which is what we've kind of defined as the web view, which a web view is really just loading that browser code that you've written. And it really is more of that cross platform. Right once. Cheers. So what are the benefits? Let's start there. What are the benefits that you would want to use a web view?

</p>
<p><strong>Jem Young</strong><br />
To me you get the benefits of fully native and pseudo native, because let's say, for instance, I'm building a game, I can build the parts that I need to run at 60 frames per second, like as performance possible, I can build that native. But if we had say, I don't know, a login page or health page, I can just fill that in a WebView HTML because I don't need to code that out because one needs to be performance. So you kind of get the the benefits of like, performance plus speed of development, where you need it. Right and you Also actually not having to ship those additional views, right? I mean, it's small. But if you've got your game or something like that, and then you have like a login or help page or feedback page, I mean, you don't have to ship that with the app. It's outside of the app. It's in the web browser, which also, that's a benefit. But also, you don't have to be held to the release cycle of submitting an app release, you can just make the change outside of it. That's a pretty big one didn't even think of discoverability as like part of your app. Native or pseudo native, you get in the App Store or the Play Store. With the other solutions. You don't necessarily Yeah,

</p>
<p><strong>Jordanna Kwok</strong><br />
yeah, submitting the app is, you know, at least on the iOS side, you do need to submit to Apple and there is a full review process. Same with Google. So you know, the the time it takes for something to get approved and actually fully released is, you know, a little bit longer than if you just kind of deployed, you know, what changed?

web packages, your CDN or something like that. It's a lot faster to

do that. So yeah, development on the web view, you can turn things around a lot faster, if you're wanting to make changes and just keep going and iterating. That's a lot quicker. So that's one huge benefit.

</p>
<p><strong>Jem Young</strong><br />
What are some cons?

</p>
<p><strong>Jordanna Kwok</strong><br />
Wow, I mean, performance, right? always gonna come down to that is the performance of the loading. And what's happening is, you have the native layer that now instantiates, a web view, which then the web view calls a your server that renders your browser code, I'm talking about all these network hops that are happening. And then to just render that view versus the native side is like, oh, there's your view. It's there. So that's huge. But then also the user interactions, writing some of the swiping or interactions that you want to make something feel native and writing that in browser code. is not easy. It's very difficult jam. I've seen you having to do that. And it becomes a lot more cumbersome on the engineer to do it to make it feel native. I'll call out gem for one implementation where he's actually been able to make it feel native where there was a WebView. I was like, This feels native. But it takes a lot of additional work to get it there.

</p>
<p><strong>Jem Young</strong><br />
It's like a lot of work to do at 60 frames a second, on the fully

</p>
<p><strong>Jordanna Kwok</strong><br />
native side. It's like, two lines of code.

I'm not sure if you know, anyone, you know, is aware that the Netflix iOS app, let's say, I think it was like, four years, four or five years ago, maybe? Yeah, those are the four years. Yeah. It was a web app up until that point. And you know, I actually started here as a JavaScript engineer, JavaScript code, HTML, CSS, and tried to make things look super native, I think, you know, we got to a point where most people didn't realize that it was a web like a hybrid app.

I gotta say, when I joined Netflix, that was right when the discussions were happening of like, okay, we need to switch off iOS to be fully native, or I think there were also conversations of like, do we do something of that pseudo implementation, but I was blown away. I was like, wait, that's a WebView. Like, I had no idea from an outside perspective. And I was blown away at some of the stuff that was done in that WebView implementation. So well done. jordanna,

I saw, oh, there was a whole team.

</p>
<p><strong>Ryan Burgess</strong><br />
You take full credit.

</p>
<p><strong>Jordanna Kwok</strong><br />
And the thing is, it was a lot of work to get like the scrolling, you know, down so that it's like, Hey, we're not dropping any frames. There were things with like, the animations that you had to work, jump through hoops to really get to something that looked native. And you know, after a while, when we started getting more and more like product requirements when you when you think about like, things that native apps started having at the time, like, hey, there's inline video playback. Yep. And then you're like, Oh my gosh, how do I do this in a hybrid app with a WebView? When we had like, one issue aisle five video tag. Right? It was like not doable. So I mean, yeah, at that point, you kind of had to decide, hey, do you go native? Do you go pseudo native and at the time, it was like the only I guess viable solution might have been like React Native. And we looked at that

it but it was like, you know, it was early to like, very, very early at that time, and it

was a little bit too immature for kind of like what we're looking for. And, you know, that's kind of like why we decided to go vanilla.

Yeah, you went Objective C full native. And how's it been? Since so you've been writing that on it? Oh, yeah.

Yeah, I mean, it's after after you get used to the syntax and everything I have to you know, I'm it's not the most like, kind of beautiful thing to look at, although some may might, you know, are you otherwise. It it does, you know, make things a lot easier to kind of like Target and turn have like, hey, I want to target network performance. And you can really just like dig into, you know, the libraries that are available that Apple gives you. There are other things that you can optimize, you know, around like playback that you wouldn't necessarily be able to do in a WebView. But fine grain stuff that you this is not accessible.

</p>
<p><strong>Jem Young</strong><br />
You I, you brought up something about browsers, and I totally forgot about that the con of hybrid apps is you're still got the WebView part, it's still running in a browser. And those are different depending on which device you're at. So like, iOS can be Safari. androids gonna be chrome now, I think mostly Samsung internet, which is still a dumb name for a web browser. I think some of their apps might run in that and some

</p>
<p><strong>Jordanna Kwok</strong><br />
of the older legacy stuff might

</p>
<p><strong>Jem Young</strong><br />
Yeah, so that's something to be aware of. It's like you have an app, but it's still technically running in browser. So you have all the nuances of CSS and like weird JavaScript engines you deal with plus a native app. So that is a downside. We don't want to Like feel like it's all upside?

</p>
<p><strong>Jordanna Kwok</strong><br />
No, no, I think you're right. There's there we talked about that we're kind of getting on those cons, I think you're right is like you're not dealing with the same browsers that you deal with? Well, the web view is a little different in each of these implementations and devices. There's just like a lot there to unpack and to deal with. Also, debugging, debugging becomes like, really, really difficult, because you're dealing with those browsers, but also dealing with the bridge, like you are having to go back to, like we talked about earlier is you are handing data, or features, or whatever it is, is you're talking between the browser code to this web view to the bridge. And it's like, all these interactions are happening. And you have to figure out how this is happening. And if there's something goes wrong in that bridge call, it's not fun to investigate. That's true.

</p>
<p><strong>Jem Young</strong><br />
So the last one is progressive web apps. Yes.

</p>
<p><strong>Jordanna Kwok</strong><br />
Pros and Cons. I mean, I'm excited for progressive web apps. I wish that we were further Along with, I think there's a lot of promise there, I think we can see. What I like about them is that we don't necessarily always need an application and that a web app might just be the perfect solution that you need. And that maybe people shouldn't be investing in any application for mobile, maybe the web app is just perfectly fine. So I like that it kind of covers a lot of the while you're writing for the browser, and you'll pretty much get this for free with some additional work to take advantage of the progressive web app. But to me, that's, that's where my head's at on that.

</p>
<p><strong>Jem Young</strong><br />
The the con is, again, you you wouldn't all the other three solutions we've talked about, you can still be in an app store, press web apps, they're not an app store. So you lose discoverability, which, for a lot of apps, that's huge, like being featured in the App Store is like their number one source of getting people to look at their app,

</p>
<p><strong>Jordanna Kwok</strong><br />
and Windows does actually subsurface web apps as in their app store.

</p>
<p><strong>Jem Young</strong><br />
Windows Windows is probably the only platform that treats them as a first class citizen. They That you can, if you download a Windows app, you can't tell if it's like a written note or written in C sharp or they do that pretty well. But you lose that for other forms of apps or for progressive web apps on other platforms.

</p>
<p><strong>Jordanna Kwok</strong><br />
Yeah. And you have to kind of you almost have to educate the user, hey, this is how you kind of make it look like it's a,

right. It's not just like download, it's like, oh, you can save this to your desktop, and then it launches as an app, or feel more app like so I don't think it's a solution to replace the app. I think, to me, it's more a way that you may not have to write the app, like if you truly your company or solution that you're trying to build may not require it. This is one way to think about that.

</p>
<p><strong>Jem Young</strong><br />
So the pro would be development would be it's just easier. It's

</p>
<p><strong>Jordanna Kwok</strong><br />
promising to think about

</p>
<p><strong>Jem Young</strong><br />
one less thing think that it's easier to find someone who understands JavaScript or can pick it up versus Objective C, or kotlin, or Android or Java or something like that. Yeah,

</p>
<p><strong>Jordanna Kwok</strong><br />
and I think the other thing I think I brought it up earlier, around Say reliability, you know, it's especially important at work conditions. If it's like loading something that, yeah, doesn't go quite right.

</p>
<p><strong>Jem Young</strong><br />
You can't gracefully handle all their conditions Exactly. You might not have

</p>
<p><strong>Jordanna Kwok</strong><br />
access, like, again to some of the lower level network libraries that can inform you that hey, you know, this is what happened, and how to like, you know, fall back on to a condition. So you are kind of like working. And I like this analogy where even in a in a, like a hybrid app where you have a web view that that web application, it's kind of like this little sandbox, right? And the kind of native world is like this huge playground. And you're kind of like working in this place where you kind of have access to the playground, but not entirely. I don't

</p>
<p><strong>Jem Young</strong><br />
know. I like the sandbox analogy because, yeah, you you are limited. You can only build a progressive web app as performant or with as many features as as you can on a webpage, and that's it, which is a pro and a con, like you do have the sandbox, you're safe, you're not probably not gonna break anything. debugging should be a little bit easier. But you don't have the full power that you have running any sort of native application.

</p>
<p><strong>Jordanna Kwok</strong><br />
Alright, so we've covered a lot. And I think before we jump into pics, I'd love to hear a takeaway, that if a piece of advice that if someone came to you and they were like, I'm writing an application, what should I use? What's the piece of advice that you would give to them?

I guess one thing to ask, when you're considering these options is really around what is the goal of the application that you're building? Because if the goal is user experience, then this is where you might say, Okay, if you're trying to get a really great user experience, maybe it's worth targeting that one platform first. If it's for example, hey, monetization. Right. That's your goal. Yeah. Maybe it is to then reduce development costs. And maybe it's like, Hey, I do want a more of a write once run anywhere. Yeah. Maybe, you know, a progressive web app, maybe that is that solution. So it's like you have to pick that one thing that you want to do, you know, with this app and kind of prioritize that.

I like that. That's good way is like it can really, it could probably put you down one path or the other very quickly.

It is that trade off. I yeah,

</p>
<p><strong>Jem Young</strong><br />
I completely agree with all that it, you really have to say like, what size is my company? What are my goals for the app? I'd say like the size of the company matters a lot more. Because if you're a 10 person company, and you have an Android app and iOS app, and a web app, like you need developers for all individually, all those versus, you know, if you're huge company, like you know our size, we can hire a whole team for iOS developers. There. There is plenty of companies out here in Silicon Valley that have gone under because They're constantly like trying to get their MVP out the door because they're trying to read a native and be shiny and all that. But when in reality, they've seen it, like, get it done, and then come back later and polish it up. It could be the stage that you're at and like thinking of growth and all that is versus polish.

</p>
<p><strong>Jordanna Kwok</strong><br />
Yeah, yeah, like that. And I think to another piece to just add on, I agree with both of those points. For me, it's like, ask a lot of questions and like field for dissent, like look for, look for other peers and talk through this of like, what, you know, if we took React Native as a solution, what are the pros and cons and like, what are we missing and, and do a really good job of like thinking through that as a strategy? Don't just jump on one and think that that's going to solve your solution? I think really thinking strategically and broadly, even if it's a small company, think about it, and get everyone's opinions and thoughts on that. Obviously, someone needs to champion it, but I think it really helps to really understand where your company is going in what the direction should be. Where do you invest in I mean, it can vary by company already. Right in each episode of the podcast, we like to share pics of things that we found interesting that we want to share with our listeners jordanna what pics do you have that you'd like to share with our listeners?

I was browsing Twitter, and you know, just kind of going through my feed. And then I came across a tweet by an individual named Veronica Lewis, who is a low vision and blindness King user, and she had this thread about the bird box challenge. And, you know, that challenge has gone off like tons of viral videos and are, you know, pretty unsafe, if you think about it. So her thread was, you know, giving us options on you know, some safe alternatives. And you know, it, it went through I think, like there were 10 options. One of them was like, Hey, you know, turn VoiceOver on, on your devices, just to experience which

I've done and it is not easy.

Yeah. And, you know, all the way down to turning on like audio descriptions on, you know, Netflix videos, right? Where you can go into like the substance option. And and you could turn your screen to be like blacks. Yeah, really can't see it. Yeah. And I was thinking, Oh, this is really great to kind of like, get people empathizing with, you know, users who might have those kinds of disabilities. And it's for accessibility purposes, especially as like, you know, front end UI devs This is something that, you know, sometimes falls to the wayside and it shouldn't it should be like something that's always top of mind. And I think that one way to really kind of like encourage that is like to kind of feel what it's really like.

Yeah. Oh, yeah. It helps you development when you're thinking about it, because you've actually experienced it. Yeah,

sympathy. Yeah. Yeah. So that's definitely one of my topics. Awesome.

</p>
<p><strong>Ryan Burgess</strong><br />
Jem, what do you have for us?

</p>
<p><strong>Jem Young</strong><br />
Can I have a like an anti pick against birdbox I will Gonna I yeah, I won't go on what I thought that movie but I wasn't very high. I didn't think very highly of that movie.

</p>
<p><strong>Jordanna Kwok</strong><br />
What didn't you like? Let's go without spoilers.

</p>
<p><strong>Jem Young</strong><br />
Like there's so many plot holes it doesn't it doesn't make sense. Like, I mean I can't I can't go into without spoiling the movie but there are many like leaps in logic that like just wouldn't I'll tell you I'll tell you once we go offline

</p>
<p><strong>Jordanna Kwok</strong><br />
all right so everyone who loved birdbox please tweet at jam young and tell him how much he loved birdbox

</p>
<p><strong>Jem Young</strong><br />
if you hated birdbox like me tweet at <a href="https://twitter.com/burgessdryan">@burgessdryan</a> on Twitter. Just tweet him birds you don't have to say anything just tweet a bird pictures. So my pic This is the first for me. drumroll it's a pic from amazon prime video. I know. I know first ever, I picking the Jem Connor files. So it Jem con is a series started by Ken Block who is a formerly of DC shoes and rally driver. Pretty much he Does just insane things with cars like just car control? Nobody believe I was trying to tell my fiance about this. And she's like, you're just going on and on and on about this dude. I'm like, Yeah, he's like an artist with a car. And it's just incredible. Amazon Prime has a series about the making of Jem Connor 10, which is the 10th In this video series, and it's, it's a good watch. And Ken Block is almost 50. And he's out there with like, 25 year olds racing and like still winning. It's Wow, nothing. It's impressive. My next pick is for Jess. It's a JavaScript conference in San Francisco. Ryan, I have been the last three or four years. Yeah. Friend of happy hour is doing a panel, which we also did last year. should be pretty fun. It's the 24th of January. Is that correct?

</p>
<p><strong>Jordanna Kwok</strong><br />
Yep. 24th in San Francisco,

</p>
<p><strong>Jem Young</strong><br />
San Francisco. It's a lot of fun. It's multitrack there are a ton of good speakers there. Like I said we go every year so if you see us there

</p>
<p><strong>Jordanna Kwok</strong><br />
say hi. Right on. Good last pic there, like that. I actually have a couple not amazon prime pics. I have These Netflix original picks, which for they, it wasn't birdbox first one was a series called you. It's a cool drama about a stalker. That's all I'm gonna say it's but I really really enjoyed it my wife and I watched it fairly quickly and, and burn through that. And then I gotta share some love for bandersnatch like the Black Mirror bandersnatch were just, it was so amazing, the interactive pieces I really loved it. Obviously UI engineering at Netflix had a lot to do with making those interactions. But just as a, as a user of Netflix, I really enjoyed the title. So got to give a pic of that when I when

</p>
<p><strong>Jem Young</strong><br />
I first heard about it, I was I like came back to my desk, and I'm like, wow, this is why I work in Netflix, not to like gush over the company I work for but I'm like, this is like such a technical achievement. Regardless of what you think of the plot of the story, whatever. Like technically, this is why I work at this company, because like they're just like pushing things farther than anybody.

</p>
<p><strong>Jordanna Kwok</strong><br />
And this happened like, you know, across the stack, it wasn't just UI. It was Also like the streaming, you know, innovation teams, there was just so much going on that, you know, at the end that people didn't realize the fact that people didn't really realize all the engineering that went in, kind of indicates to me that it's like, oh, it went so well that like, it's like, oh, wow, magic.

</p>
<p><strong>Ryan Burgess</strong><br />
Yeah, it just, it came together. And it came together really nicely. And the end product shows that which is so impressive. So I got it, you know, call that one Oh, because I really loved it too. And then on top of that, as a third pick on the 29th of January, we are actually hosting a JavaScript talk that's talking through a lot of the platform as well as the UI for creating bandersnatch so it's a whole bandersnatch theme tonight, which I'm super excited for. So that's right at Netflix. So yeah, those are my three picks. Before we end the episode, I want to thank jordanna thank you so much for joining us. It was great having you on where can people get in touch with you, 

</p>
<p><strong>Jordanna Kwok</strong><br />
you can get in touch with me on twitter at <a href="https://twitter.com/jordeewok">@jordeewok</a> and that is with two e's.

</p>
<p><strong>Ryan Burgess</strong><br />
Right on. And thank you all for listening today's episode, make sure to subscribe to front end happier podcasts on whatever you enjoy listening to podcasts on whether it be Spotify, apple, Android, whatever it is subscribe. And you can follow us on Twitter at <a href="https://twitter.com/frontendhh">@frontendhh</a>. Any last words

</p>
<p><strong>Jem Young</strong><br />
birdbox was not good. Let's be honest. It was not a good movie.

</p>

  `;
  return transcript;
};