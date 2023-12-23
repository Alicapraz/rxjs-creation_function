import { of, from } from 'rxjs';

//Bu şekilde observable oluşturmuş içinde next ile kaydetmiş
//ve subscribe olarak çalıştırmış oluyoruz.
of('Ali', 'Mehmet', 'Kılıçarslan').subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});

//Tip belirtmemize de gerek yok içine istediğin tip kaydedebiliriz.
of(10, 20, 30).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});

//from ile array bastırıyoruz.
from(['Ali', 'Mehmet', 'Kılıçarslan']).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});

//bu şekilde değişkenlere atayarak da yazdırabiliriz hepsini.
const array = [10, 20, 30];
const result = from(array);
result.subscribe((x) => console.log(x));

// bi promise kullanarak da bu şekilde oluyor.
const somePromise = new Promise((resolve, reject) => {
  // resolve('Kabul edildi');
  reject('Hata');
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(err),
  complete: () => console.log('Completed'),
});

//timer function bizim verdiğimiz süre sonunda oluşturur of ile kullanım aynı

//interval de ise değerleri istediğimiz süre aralıklarında oluştururuz,
//örneğin içerisine 2 saniye girersem 2 saniyede bir next eder.
