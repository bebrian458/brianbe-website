# Personal Website

### Tasks
1. Set up auto deploy to heroku - checked
1. Set up heroku pipeline - checked
1. Set up Circle CI
    1. husky (pre-commit, pre-push)
    1. lint
1. Protect Master branch

More to come...test...

### Custom Domain Name

To connect google's dns to heroku domain
- add subdomain forward (with @ as the subdomain)
- use CNAME and heroku domain

Watch this [video](https://www.youtube.com/watch?v=SCE5LPPcma0) for more info.

### Git Commands

Remove a commit:
```
$ git reset --hard HEAD^
```

Removing a remote-branch:
```
$ git remote prune origin
```