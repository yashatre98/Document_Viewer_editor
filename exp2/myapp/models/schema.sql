-- create the schema
Create Schema Editor;

-- use it
Use Editor;

-- create the Articles table, this table has all the articles.
Create table Articles(
id int primary key auto_increment,
title varchar(255),
content TEXT,
LastEdited DATETIME,
);

-- populate with some articles
insert into Articles (title, content, LastEdited) values('The Catapult Toilet', ' Blast 
your business into the stratosphere! This extreme toilet uses a hydraulic  launching system 
to send waste flying hundreds of feet into the air. Say goodbye  to clogged pipes and 
experience the thrill of high-flying defecation!', CURRENT_TIMESTAMP() );

insert into Articles (title, content, LastEdited) values('The Pet Rock Deluxe', ' All the
 joys of pet ownership without the hassle! This interactive rock plays,  fetches sticks,
  and displays a range of emotions on its digital face screen.  Choose from over 10 rock 
  "breeds" including basalt, granite and limestone.', CURRENT_TIMESTAMP() );

insert into Articles (title, content, LastEdited) values('The Beer Helmet', ' Keep the 
party flowing no matter where you go with this wearable beer dispenser.  Hands-free 
drinking at its finest! The Beer Helmet uses a complex network of tubes  to deliver a 
constant stream of frosty brew straight to your mouth. Just open wide and let the good 
times pour!', CURRENT_TIMESTAMP() );

insert into Articles (title, content, LastEdited) values('Bacon Scented Cologne', ' 
Entice your senses and attract hungry strangers with the mouthwatering  aroma of 
sizzling bacon. One spritz of this tantalizing fragrance will  have them begging for 
breakfast. Go hog wild and douse yourself in liquid pork essence! Oink oink.', 
CURRENT_TIMESTAMP() );

insert into Articles (title, content, LastEdited) values('Bacon Scented Cologne', ' 
Entice your senses and attract hungry strangers with the mouthwatering  aroma of 
sizzling bacon. One spritz of this tantalizing fragrance will  have them begging 
for breakfast. Go hog wild and douse yourself in liquid pork essence! Oink oink.', 
CURRENT_TIMESTAMP() );

insert into Articles (title, content, LastEdited) values('Automatic Alibi Generator', 
' Stop getting busted in embarrassing lies! This discrete Bluetooth device whispers  
credible excuses straight to your earphone. It even changes details like names and  
places for perfect cover. Your shady secret is safe!', CURRENT_TIMESTAMP() );