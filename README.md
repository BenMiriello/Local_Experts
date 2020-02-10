From personal branch ()
 *after making changes*
git add .
git commit -m "Your Message"
git push origin Your-Branch-Name
*Switch to master Branch*
git checkout master 

From master Branch ()

git pull
git merge Your-Branch-Name
git push origin master
*Switch back to your Branch*
git checkout Your-Branch-Name
git merge master

then back to Top

