### question 1:

## 1. What is the use of the `keyof` keyword in TypeScript? Provide an example.

`TypeScript`-এ `keyof` কীওয়ার্ডটি কোনো নির্দিষ্ট টাইপের সমস্ত প্রোপার্টি নাম `(key)`-এর একটি `union` তৈরি করতে ব্যবহৃত হয়। এটি ডেভেলপারদের টাইপ-সেফ উপায়ে কীগুলোকে রেফারেন্স করার সুযোগ দেয়, যার ফলে টুলিং এবং এরর চেকিং আরও উন্নততর হয়। `keyof` অনেক সময় `generic` এর সাথে ব্যবহৃত হয় যাতে করে রিইউজেবল ফাংশন তৈরি সহজ হয়ে যায়। এই উপায়ে অবজেক্ট প্রোপার্টিগুলো নিরাপদে অ্যাক্সেস করা অথবা `Pick` কিংবা `Record`-এর মতো `utility type ` তৈরি করার মাধ্যমে কম্পাইল টাইমে শুধুমাত্র ভ্যালিড **key** গুলোই ব্যবহার করা হয়।

- `keyof` ডাইনামিকভাবে সব প্রোপার্টি/কী ব্যবহার করতে সাহাজ্য করে। উল্লেখ্য এই key বা প্রপার্টি গুলো keyof মেথড চালানোর সময় অটোমেটিক union করে ফেলে।
- এটি প্রায়শই জেনেরিক টাইপের সাথে ব্যবহৃত হয়।

---

### question 2:

## 2. What is the use of `enums` in TypeScript? Provide an example of a numeric and string enum.

`TypeScript`-এ `enum` হচ্ছে নাম সম্বলিত একক মান যা ধ্রুবক **(named constants)** আসলে আমরা এই ভাবে মূলত একটি সেট সংজ্ঞায়িত করি। পরস্পর সম্পর্কিত এই মানগুলিকে একসাথে গ্রূপ করে ফেলার কারণে এবং ধ্রুবক মানগুলিকে অর্থবহ নাম দিয়ে কোডকে আরও পাঠযোগ্য ও রক্ষণযোগ্য `readability & maintainability` করা হয়।

`enum` এর প্রধান সুবিধাগুলি হলো:

- পাঠযোগ্যতা (Readability): ম্যাজিক সংখ্যা বা স্ট্রিংয়ের (magic numbers/strings) পরিবর্তে বর্ণনামূলক নাম ব্যবহার করা যায়।
- টাইপ সেফটি (Type Safety): TypeScript ভ্যালিড enum ছাড়া কোন মান নিতেই দেবে না ।
- রক্ষণযোগ্যতা (Maintainability): সম্পর্কিত ধ্রুবকগুলিকে কেন্দ্রীভূত করা যায়।
- স্বয়ংক্রিয় সম্পূর্ণকরণ (Auto-completion): IDE-গুলি আরও ভালো IntelliSense সাপোর্ট প্রদান করে।

### উদাহরণ:

`Numeric enum`

```ts
num StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500

  const responseStatus = StatusCode.Success; /* আউটপুট আসবে  200 */
}
```

`String enum`

```ts
enum UserRole {
	Admin = "ADMIN",
	Editor = "EDITOR",
	Viewer = "VIEWER",
}
const userRole = UserRole.Admin; // ভ্যারিয়েবল এখানে মান সেট করবে  "ADMIN"
function checkPermission(role: UserRole) {
	if (role === UserRole.Admin) {
		return "Full access granted";
	} else if (role === UserRole.Editor) {
		return "Edit access granted";
	} else {
		return "Read-only access";
	}
}
```
