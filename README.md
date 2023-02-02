This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Copy .env.example and rename it to .env

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Deploy API to server

  
1. connect by ssh to the server
	- `ssh root@5.187.1.53`
2. go to workdir and run start script 
	- `cd /var/www/cash`
	- `sh start.sh `

## Deploy static pages to cashbro.space
1. create build and archive it
	- `yarn build`
	- archive `out` folder
2. download to server 
	- go to isp manager => File manager
	- upload out.zip
	- extract out.zip into cashbro.space dir (root project dir)
	- go to Shell-client
	- `cd www/cashbro.space/`
	- `cp -rf out/* ./`
	- `rm -rf out`
	- `rm out.zip`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

