/**
 * Modern Arabic Pharmacy - Core Application Logic
 * Manages navigation, state, cart, modals, search, and interactions across all pages.
 */

const PharmacyApp = (function() {
  // Initial default products for seeding
  const DEFAULT_PRODUCTS = [
    {
      id: 'panadol-extra',
      name: 'بنادول إكسترا 500 ملغ',
      subtitle: 'مسكن للألم وخافض حرارة فعال وسريع المفعول',
      category: 'painkillers',
      tag: 'مسكن وألم',
      price: 18.00,
      rating: 4.9,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFsXPjL18jC4Fmx0KsGTkMpQaWE_pT3SK1ZGc5RDNt-nIbvnkZ7_NKF_w6vy-rex8xWKP-EWTT9VobbhtmJ0e_f8gDMNrMX8P35GbP9uIOnrvA-aTUh8eFq0ZqX1HIAZ_z-sXRSgi7cFkCILpE0CmhhWqb8Q6RVj5czE_0R042tpr8zmuy6ane0ZQpJdUZfJeH3d88u0D9w7uxNa3xRtcZz---YVlXPlORxn0kU3NGlQKmF5CEKwKR',
      isRx: false,
      isBestseller: true,
      inStock: true
    },
    {
      id: 'omega-3',
      name: 'أوميغا 3 زيت سمك 1000 ملغ',
      subtitle: 'مكمل غذائي غني بـ EPA و DHA لدعم صحة القلب',
      category: 'vitamins',
      tag: 'فيتامينات ومكملات',
      price: 65.00,
      rating: 4.8,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhUYIuG6C3F68kv5-uqFFh194AfmzInVZxQ3axxrxZmAOz5JgG3YUAZcYHnWUuVBlIS00QXosegtpsTa5p1kwZO2LVPPXI7VIwqgFBQSGYfm3pF6vfOQCaWUdZxgakj5m3CzkhCRzsQEjDMO7dnKw_18zdMU04fHtm-6eAiXKHc8Xe6cuPyhLSNGgAuaJhBN3sf-bpZk21Nv8lreCuikLqQNsdHF5E0jQrCTvaxv0rDr-rQ0a4-ZYb',
      isRx: false,
      isBestseller: true,
      inStock: true
    },
    {
      id: 'vitamin-c',
      name: 'فيتامين سي 1000 ملغ فوار',
      subtitle: 'تعزيز المناعة اليومية والحماية المضادة للأكسدة',
      category: 'vitamins',
      tag: 'فيتامينات ومكملات',
      price: 24.00,
      rating: 4.7,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZjVkgRH5xTuM9rS-u4SFpZNeRmJnaDW_rJQkszpo_u0vfhmhZ2WTF2NCY7mDAPw1uk_nS3rgCf2SyiqqG9UTlsIVbOvRC3wJ6s2A1AsnwPL50vmlAt03R5WlBsMene_Yz57-xU4p1ALP_qHuOSGZPOVK64rxI3YM_Xy14FIjQbF4o4WTxelJSm4JsxdTjqNuu9YkDc5doLcz8IGvrTPiBFWrxo3zG5Jog7p-VfDoWkma0ISIvLp6h',
      isRx: false,
      isBestseller: true,
      inStock: true
    },
    {
      id: 'augmentin',
      name: 'أوغمنتين 1 جم',
      subtitle: 'مضاد حيوي واسع المجال - يتطلب وصفة معتمدة',
      category: 'antibiotics',
      tag: 'مضاد حيوي',
      price: 45.00,
      rating: 4.9,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4enKzu5hoP217v_Jh7RPa83c8sJ-HKmWW0FWU_WFL_SBdePzZMzkd-GDNEiKTbEVgFqzg911QIQWZFq65Ejv0IDe-MDX32wTUxy8gbVVCQcjBQkZgUZ8Mo0DQKpNXGPsW93sDXjKQvUHD6NgGqh4jsHTygNxBgCS-6jrNYqtA2rR3EOP0WjP--dwjwuPx3KPPAvKeBtoHM2-FSwhP_lGZd1cY3nZv-6K9dLUY6XCABLwsaLJrf6nE',
      isRx: true,
      isBestseller: false,
      inStock: true
    },
    {
      id: 'refresh-plus',
      name: 'ريفريش بلس قطرة مرطبة',
      subtitle: 'ترطيب وراحة فورية لجفاف وإجهاد العين اليومي',
      category: 'otc',
      tag: 'العناية بالعين',
      price: 32.00,
      rating: 4.6,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZHQb_cYxki6x7NwzpQ_2rnRIGylmRXIfCWV9IG9tQZiSDO2XHJBL1hLJ_rOSh1mxlb7izuUxcXgWDtFH_2rojHTSbC6Q2TqZF3wSchCKG4U5xzYCry7oujLLPVOV13GjNZrwcNCW0991nXdMUjaOcxtVLlfw8iiOsuSnQR0yW4qXu_Jy-Ehs-3j1gLb2fV6h8PH2AGZqm3vPc_mgbWzlNyPX9GgKb46mky2M6iX-4ECv-GjBpRQEb',
      isRx: false,
      isBestseller: false,
      inStock: true
    },
    {
      id: 'accu-chek',
      name: 'جهاز سكر أكيو تشيك',
      subtitle: 'دقة طبية فائقة ونتائج فورية خلال 5 ثوانٍ فقط',
      category: 'devices',
      tag: 'أجهزة قياس',
      price: 110.00,
      rating: 5.0,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXc5pHHWbOXCr64EeP5HsgbxXwH6-uAFuEwU_47pi7z4I4A-hE3RPZZVUF76-zar84N8h5hS0nbgvcEm_JQ1IGpAzjMU582cWbZgyQc5d5hHgXsZWfwUNr3cK-KsbyW8lumnbbuoDDftGl7QFSJTh9NAUpx-EBOx2dEVVGT5GEWptxs8ldUAPciB_QjswyNVZ6CqsNOZxjFvv_ycJmsJW50IC6GhEsgP8l651JzyDHf0QTiHp1tunK',
      isRx: false,
      isBestseller: false,
      inStock: true
    },
    {
      id: 'dettol',
      name: 'معقم ومطهر طبي ديتول 250 مل',
      subtitle: 'حماية وتطهير طبي ضد الجراثيم',
      category: 'otc',
      tag: 'إسعافات أولية',
      price: 16.00,
      rating: 4.8,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeLGc85P061yqENmykkhhBc7JGIwynv8XETFoh2PzrrWC247wDYPb6lDCG3ZvLLIUDg5l3fU-t6xEWZ7qD_C3Y8W3XcjeVXAuJwioqdFcX9gXLf21Qdn60-g4Q31WLlV_K81S14lHKMFyqFluE_ICdo4rcsWCSNzZBkrV2H9U5ynLDrsqhvPMbofA3KgGHn-34j_gxfFLqAlIgXH2Ej2L01pYSKeoHst1_rxsnfQ-Kuh81XTEyoIWj',
      isRx: false,
      isBestseller: true,
      inStock: true
    },
    {
      id: 'concor',
      name: 'كونكور ٥ ملغ (Concor)',
      subtitle: 'حبة واحدة صباحاً • وصفة رقم #4902',
      category: 'antibiotics',
      tag: 'أدوية مزمنة',
      price: 28.50,
      rating: 4.9,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDM7Hq5OrjlQb3kmrXgWpYlMS39A1lww0eTtFQZuWtTUMwMwyA63oY2wa4yWQmOyurDZPuc72AVn040chvhFOMPMX44YVhuXaAgAmRvGkj0FmWZ-VCsm_Zx6bXexL6Fws9EL2BN8ON9iq3I7NERWbcXs2TKIlgNcUTyKQHwWgGhPFd2n-sdNajbAHuAnaiPcgrOLNgyCyNDkYiqQ7v21wearqc2tKdWEhubeakU4sY8YFINpGoAmCv',
      isRx: true,
      isBestseller: false,
      inStock: true
    }
  ];

  // Cart Storage Keys
  const CART_KEY = 'stitch_pharmacy_cart';
  const USER_KEY = 'stitch_pharmacy_user';
  const FAVS_KEY = 'stitch_pharmacy_favs';

  // Seed default cart items if empty
  function initCart() {
    if (!localStorage.getItem(CART_KEY)) {
      const initialItems = [
        {
          id: 'panadol-extra',
          name: 'بنادول أدفانس 48 قرص',
          tag: 'مسكن وألم',
          price: 18.00,
          quantity: 2,
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBniVHRlP9rbNIpVYXFV-njp7PDFkeQkvfJGud07k7eVp52tVszfxe2MLE5t0HlANLXdiq3aApZDKn7StbRu1FKQ5AAiLteIqEjPfJgGEl7u6hBdFhNoP6SsfHxCuGcKk4yI2v5gnka7okuTNSE5zajfd6CFeFCJAmXZ_xQ0QjjGIrDeCDdByWUZ7wDnuSLBy-pr6lA1ORI5JVUbATSNsYxlX154rHbgTRoJoJZmdfyOn-EnMDRb3bu'
        },
        {
          id: 'omega-3',
          name: 'فيتامين د3 5000 وحدة دولية',
          tag: 'فيتامينات ومكملات',
          price: 45.00,
          quantity: 1,
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnD2IjySM7tQyq_nHjUjrszsqMxgcffizltet1ySahWSJf64koaeARRP06Ey4HC-fobs9NgxDJZuMqQAxbOVXz5U2S4JT7pOnphWY-gfKzBsTSnRLL65hsXwK_oIYduQ23Tgez2crphaOWoj2O6dwpdwtJiHI7gMY6O33hPjBHbXpz5xIY7-WfUlcJJC867585-Q6uY_1FIEmE8utQn1V8qS2nGo6p7-1oA_5CI_zp4xEzQKz5bvPA'
        },
        {
          id: 'dettol',
          name: 'معقم ومطهر طبي ديتول 250 مل',
          tag: 'إسعافات أولية',
          price: 16.00,
          quantity: 1,
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeLGc85P061yqENmykkhhBc7JGIwynv8XETFoh2PzrrWC247wDYPb6lDCG3ZvLLIUDg5l3fU-t6xEWZ7qD_C3Y8W3XcjeVXAuJwioqdFcX9gXLf21Qdn60-g4Q31WLlV_K81S14lHKMFyqFluE_ICdo4rcsWCSNzZBkrV2H9U5ynLDrsqhvPMbofA3KgGHn-34j_gxfFLqAlIgXH2Ej2L01pYSKeoHst1_rxsnfQ-Kuh81XTEyoIWj'
        }
      ];
      localStorage.setItem(CART_KEY, JSON.stringify(initialItems));
    }
  }

  function getCart() {
    initCart();
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadges();
  }

  function addToCart(product, quantity = 1) {
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id || item.name === product.name);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        id: product.id || 'prod-' + Date.now(),
        name: product.name,
        price: parseFloat(product.price) || 20,
        tag: product.tag || 'صيدلية',
        image: product.image || '',
        quantity: quantity
      });
    }
    saveCart(cart);
    showToast(`تمت إضافة "${product.name}" إلى السلة 🛒`, 'عرض السلة', () => {
      window.location.href = getRelativePath('cart.html');
    });
  }

  function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
    return cart;
  }

  function updateQuantity(id, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === id);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        return removeFromCart(id);
      }
    }
    saveCart(cart);
    return cart;
  }

  function clearCart() {
    saveCart([]);
  }

  function getCartCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  }

  function getCartSubtotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + ((item.price || 0) * (item.quantity || 1)), 0);
  }

  function updateCartBadges() {
    const count = getCartCount();
    document.querySelectorAll('.cart-badge, [data-cart-badge]').forEach(badge => {
      badge.textContent = count;
      badge.classList.remove('badge-bump');
      void badge.offsetWidth; // trigger reflow
      badge.classList.add('badge-bump');
      if (count === 0) {
        badge.classList.add('opacity-0');
      } else {
        badge.classList.remove('opacity-0');
      }
    });
  }

  // Determine current page & relative paths
  function isSubfolder() {
    return window.location.pathname.includes('/_') || window.location.pathname.includes('\\_');
  }

  function getRelativePath(targetFile) {
    if (isSubfolder()) {
      switch (targetFile) {
        case 'index.html': return '../_2/code.html';
        case 'medicines.html': return '../_1/code.html';
        case 'cart.html': return '../_3/code.html';
        case 'account.html': return '../_4/code.html';
        default: return targetFile;
      }
    }
    return targetFile;
  }

  function getCurrentPageId() {
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path.endsWith('/') || path.includes('/_2/') || path.includes('\\_2\\')) {
      return 'home';
    }
    if (path.includes('medicines.html') || path.includes('search.html') || path.includes('/_1/') || path.includes('\\_1\\')) {
      return 'medicines';
    }
    if (path.includes('cart.html') || path.includes('/_3/') || path.includes('\\_3\\')) {
      return 'cart';
    }
    if (path.includes('account.html') || path.includes('/_4/') || path.includes('\\_4\\')) {
      return 'account';
    }
    return 'home';
  }

  // Toast System
  let toastTimer;
  function showToast(message, actionText, actionCallback) {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] transform translate-y-20 opacity-0 transition-all duration-300 w-[92%] max-w-sm pointer-events-none';
      toast.innerHTML = `
        <div class="bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-2xl shadow-2xl flex items-center justify-between gap-3 border border-surface-container-highest/10">
          <div class="flex items-center gap-2.5 min-w-0">
            <span class="material-symbols-outlined text-secondary-container text-[22px] flex-shrink-0" id="toast-icon">check_circle</span>
            <span class="font-body-md text-body-md truncate" id="toast-text"></span>
          </div>
          <button class="text-label-sm font-label-sm text-secondary-container underline flex-shrink-0 pointer-events-auto hover:text-white" id="toast-action" type="button"></button>
        </div>
      `;
      document.body.appendChild(toast);
    }

    const textEl = toast.querySelector('#toast-text');
    const actionEl = toast.querySelector('#toast-action');

    textEl.textContent = message;
    if (actionText && typeof actionCallback === 'function') {
      actionEl.textContent = actionText;
      actionEl.style.display = 'inline-block';
      actionEl.onclick = actionCallback;
    } else {
      actionEl.style.display = 'none';
      actionEl.onclick = null;
    }

    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 3200);
  }

  // Universal Prescription Upload Modal
  function openPrescriptionModal() {
    let modal = document.getElementById('prescription-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'prescription-modal';
      modal.className = 'modal-backdrop fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4';
      modal.innerHTML = `
        <div class="modal-content w-full sm:max-w-md bg-surface-container-lowest rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl space-y-4">
          <div class="flex items-center justify-between border-b border-surface-container pb-3">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-[28px]">prescriptions</span>
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">رفع الوصفة الطبية (الروشتة)</h3>
            </div>
            <button class="p-1 rounded-full text-outline hover:text-on-surface" onclick="PharmacyApp.closePrescriptionModal()" type="button">
              <span class="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>
          <p class="text-body-sm text-on-surface-variant">
            التقط صورة واضحة لورقة الوصفة الطبية أو قم بإرفاق ملف PDF وسيقوم الصيدلي بصرفها والتواصل معك فوراً.
          </p>
          <div class="border-2 border-dashed border-primary/40 bg-secondary-container/10 rounded-2xl p-6 text-center flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-secondary-container/20 transition-all" onclick="document.getElementById('rx-file-input').click()">
            <input type="file" id="rx-file-input" accept="image/*,application/pdf" class="hidden" onchange="PharmacyApp.handleRxFile(this)" />
            <div class="w-16 h-16 rounded-full bg-surface-container-low text-primary flex items-center justify-center shadow-inner">
              <span class="material-symbols-outlined text-[32px]">photo_camera</span>
            </div>
            <div class="flex flex-col">
              <span class="font-label-lg text-label-lg text-primary font-bold">انقر للتصوير أو اختيار ملف</span>
              <span class="text-label-sm text-on-surface-variant">يدعم الصور JPG, PNG وملفات PDF</span>
            </div>
          </div>
          <div id="rx-preview-container" class="hidden flex items-center gap-3 p-3 bg-surface-container-low rounded-xl">
            <span class="material-symbols-outlined text-secondary text-[24px]">task_alt</span>
            <span class="text-label-md text-on-surface font-medium truncate" id="rx-file-name">صورة_الروشتة.jpg</span>
          </div>
          <div class="flex gap-2 pt-2">
            <button class="flex-1 py-3 bg-primary text-on-primary rounded-full font-label-lg font-bold shadow-md hover:bg-primary-container active:scale-95 transition-all flex items-center justify-center gap-1.5" onclick="PharmacyApp.submitPrescription()" type="button">
              <span class="material-symbols-outlined text-[20px]">send</span>
              <span>إرسال للصيدلي الآن</span>
            </button>
            <button class="px-5 py-3 bg-surface-container text-on-surface rounded-full font-label-lg font-semibold hover:bg-surface-container-high transition-all" onclick="PharmacyApp.closePrescriptionModal()" type="button">
              إلغاء
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    modal.classList.add('active');
  }

  function closePrescriptionModal() {
    const modal = document.getElementById('prescription-modal');
    if (modal) modal.classList.remove('active');
  }

  function handleRxFile(input) {
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const preview = document.getElementById('rx-preview-container');
      const nameEl = document.getElementById('rx-file-name');
      if (preview && nameEl) {
        nameEl.textContent = file.name;
        preview.classList.remove('hidden');
      }
    }
  }

  function submitPrescription() {
    closePrescriptionModal();
    showToast('تم إرسال الوصفة الطبية بنجاح! سيتصل بك الصيدلي خلال 5 دقائق 🩺');
  }

  // Universal Pharmacist Chat Modal
  function openPharmacistChat() {
    let modal = document.getElementById('pharmacist-chat-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'pharmacist-chat-modal';
      modal.className = 'modal-backdrop fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4';
      modal.innerHTML = `
        <div class="modal-content w-full sm:max-w-md bg-surface-container-lowest rounded-t-3xl sm:rounded-3xl flex flex-col max-h-[85vh] h-[550px] shadow-2xl overflow-hidden">
          <!-- Chat Header -->
          <div class="p-4 bg-primary text-on-primary flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="relative">
                <img class="w-11 h-11 rounded-full object-cover ring-2 ring-primary-fixed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_H835GI2QohAmfWQEfA6eAglqcfEdW6GF-wfr8VfwyHxugo8xeMmEd6TyhwINuYHZGB_X7g7d0n4YDi5g5Y_gW0qpyrVRKZBYGP8EGhYPt6LK5Hu4QcCu9aN3DbrTMGQjTiduFE-74gYb7eH5uAJXCSwsZx_KtNrv5N8uQLO0Fjb828Svj49hV-Zrt9e4OjqF3of0RuIzHL5S6O9fe96E-lO5VzWi4a9KDCasU7HPp-pdwImz_JLj" alt="د. سارة الشهري"/>
                <span class="absolute bottom-0 right-0 w-3 h-3 bg-secondary-container rounded-full ring-1 ring-white"></span>
              </div>
              <div class="flex flex-col">
                <span class="font-headline-sm text-[16px] font-bold">د. سارة الشهري</span>
                <span class="text-[12px] opacity-90">صيدلانية سريرية معتمدة • متصل الآن</span>
              </div>
            </div>
            <button class="p-1 rounded-full hover:bg-white/20 transition-colors text-white" onclick="PharmacyApp.closePharmacistChat()" type="button">
              <span class="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>
          <!-- Chat Messages Body -->
          <div class="flex-1 p-4 overflow-y-auto space-y-3 bg-surface" id="chat-messages-container">
            <div class="flex items-start gap-2">
              <div class="bg-surface-container-lowest p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
                <p class="text-body-sm text-on-surface">أهلاً بك في خدمة الاستشارة الصيدلانية المجانية! كيف يمكنني مساعدتك اليوم بخصوص الأدوية أو الجرعات؟</p>
                <span class="text-[10px] text-outline mt-1 block">الآن</span>
              </div>
            </div>
          </div>
          <!-- Chat Input -->
          <div class="p-3 bg-surface-container-lowest border-t border-surface-container flex items-center gap-2">
            <input type="text" id="chat-input-field" placeholder="اكتب استشارتك هنا..." class="flex-1 bg-surface-container-low px-4 py-2.5 rounded-full text-body-md outline-none focus:ring-2 focus:ring-primary" onkeypress="if(event.key==='Enter') PharmacyApp.sendChatMessage()" />
            <button class="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container active:scale-95 transition-all shadow-sm" onclick="PharmacyApp.sendChatMessage()" type="button">
              <span class="material-symbols-outlined text-[20px] rotate-180">send</span>
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
    modal.classList.add('active');
    setTimeout(() => {
      const input = document.getElementById('chat-input-field');
      if (input) input.focus();
    }, 100);
  }

  function closePharmacistChat() {
    const modal = document.getElementById('pharmacist-chat-modal');
    if (modal) modal.classList.remove('active');
  }

  function sendChatMessage() {
    const input = document.getElementById('chat-input-field');
    const container = document.getElementById('chat-messages-container');
    if (!input || !container || !input.value.trim()) return;

    const userMsg = input.value.trim();
    input.value = '';

    // Render user message
    const userBubble = document.createElement('div');
    userBubble.className = 'flex items-start justify-end gap-2';
    userBubble.innerHTML = `
      <div class="bg-primary text-on-primary p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
        <p class="text-body-sm">${userMsg}</p>
        <span class="text-[10px] opacity-75 mt-1 block text-left">الآن</span>
      </div>
    `;
    container.appendChild(userBubble);
    container.scrollTop = container.scrollHeight;

    // Pharmacist simulated auto-reply
    setTimeout(() => {
      const docBubble = document.createElement('div');
      docBubble.className = 'flex items-start gap-2';
      let replyText = 'شكراً لسؤالك. يُفضل دائماً تناول هذا الدواء بعد وجبة خفيفة مع كوب كامل من الماء. وإذا كنت تعاني من أي حساسية يرجى إبلاغي فوراً.';
      if (userMsg.includes('صداع') || userMsg.includes('حرارة') || userMsg.includes('بنادول')) {
        replyText = 'لبنادول إكسترا، الجرعة القصوى للبالغين هي قرصان كل 6-8 ساعات، مع تجنب تجاوز 8 أقراص يومياً.';
      } else if (userMsg.includes('فيتامين') || userMsg.includes('مكمل')) {
        replyText = 'الفيتامينات الذائبة بالدهون مثل د3 تؤخذ مع وجبة تحتوي على دهون صحية لامتصاص مثالي.';
      } else if (userMsg.includes('توصيل') || userMsg.includes('طلب')) {
        replyText = 'نوفر توصيلاً فائق السرعة خلال 30 دقيقة لجميع الأحياء القريبة.';
      }
      docBubble.innerHTML = `
        <div class="bg-surface-container-lowest p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
          <p class="text-body-sm text-on-surface">${replyText}</p>
          <span class="text-[10px] text-outline mt-1 block">الآن</span>
        </div>
      `;
      container.appendChild(docBubble);
      container.scrollTop = container.scrollHeight;
    }, 900);
  }

  // Universal Navigation Bar Renderer / Fixer
  function setupNavigation() {
    const pageId = getCurrentPageId();
    const nav = document.querySelector('nav');
    if (!nav) return;

    const homeUrl = getRelativePath('index.html');
    const medUrl = getRelativePath('medicines.html');
    const cartUrl = getRelativePath('cart.html');
    const accUrl = getRelativePath('account.html');

    const cartCount = getCartCount();

    nav.innerHTML = `
      <div class="h-16 px-gutter-mobile flex items-center justify-around">
        <!-- الرئيسية -->
        <a class="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] transition-colors gap-0.5 ${pageId === 'home' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}" href="${homeUrl}">
          <span class="material-symbols-outlined text-[24px]" style="${pageId === 'home' ? "font-variation-settings: 'FILL' 1;" : ''}">home</span>
          <span class="text-label-sm font-label-sm">الرئيسية</span>
        </a>
        
        <!-- الأدوية -->
        <a class="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] transition-colors gap-0.5 ${pageId === 'medicines' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}" href="${medUrl}">
          <span class="material-symbols-outlined text-[24px]" style="${pageId === 'medicines' ? "font-variation-settings: 'FILL' 1;" : ''}">search</span>
          <span class="text-label-sm font-label-sm">الأدوية</span>
        </a>
        
        <!-- السلة -->
        <a class="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] transition-colors gap-0.5 relative ${pageId === 'cart' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}" href="${cartUrl}">
          <div class="relative flex items-center justify-center">
            <span class="material-symbols-outlined text-[24px]" style="${pageId === 'cart' ? "font-variation-settings: 'FILL' 1;" : ''}">shopping_cart</span>
            <span class="cart-badge absolute -top-1 -right-2 bg-primary text-on-primary text-[10px] min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center font-bold shadow-sm transition-transform">${cartCount}</span>
          </div>
          <span class="text-label-sm font-label-sm">السلة</span>
        </a>
        
        <!-- حسابي -->
        <a class="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] transition-colors gap-0.5 ${pageId === 'account' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}" href="${accUrl}">
          <span class="material-symbols-outlined text-[24px]" style="${pageId === 'account' ? "font-variation-settings: 'FILL' 1;" : ''}">person</span>
          <span class="text-label-sm font-label-sm">حسابي</span>
        </a>
      </div>
    `;

    // Setup Header Links
    setupHeaderLinks();
  }

  function setupHeaderLinks() {
    const header = document.querySelector('header');
    if (!header) return;

    // Profile click -> Account
    const profileContainer = header.querySelector('.flex.items-center.gap-space-sm');
    if (profileContainer) {
      profileContainer.style.cursor = 'pointer';
      profileContainer.title = 'حسابي وتسجيل الدخول';
      profileContainer.onclick = (e) => {
        // If clicking the text "صيدليتي", go to Home; if profile avatar, go to Account
        if (e.target.closest('img')) {
          window.location.href = getRelativePath('account.html');
        } else {
          window.location.href = getRelativePath('index.html');
        }
      };
    }

    // Location badge click -> prompt address
    const locBadge = header.querySelector('.material-symbols-outlined.text-primary')?.parentElement;
    if (locBadge) {
      locBadge.style.cursor = 'pointer';
      locBadge.onclick = () => {
        const newLoc = prompt('تحديد عنوان التوصيل:', 'الرياض، حي النخيل');
        if (newLoc) {
          const span = locBadge.querySelector('span:last-child');
          if (span) span.textContent = newLoc;
          showToast(`تم تعيين موقع التوصيل إلى: ${newLoc}`);
        }
      };
    }

    // Notification bell click -> show medical notifications
    const bellBtn = header.querySelector('button[aria-label="التنبيهات"]');
    if (bellBtn) {
      bellBtn.onclick = () => {
        showToast('🔔 لديك تنبيه: حان موعد جرعة دواء كونكور 5 ملغ');
      };
    }
  }

  // Home Page Initializer
  function initHomePage() {
    // Search input
    const searchInput = document.querySelector('section.relative input[type="search"]');
    if (searchInput) {
      searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          const query = encodeURIComponent(this.value.trim());
          window.location.href = getRelativePath('medicines.html') + (query ? `?q=${query}` : '');
        }
      });
      // Click on search icon
      const searchIcon = searchInput.parentElement?.querySelector('.material-symbols-outlined');
      if (searchIcon) {
        searchIcon.style.cursor = 'pointer';
        searchIcon.onclick = () => {
          const query = encodeURIComponent(searchInput.value.trim());
          window.location.href = getRelativePath('medicines.html') + (query ? `?q=${query}` : '');
        };
      }
    }

    // Barcode scanner button
    const scanBtn = document.getElementById('scan-barcode-btn');
    if (scanBtn) {
      scanBtn.onclick = () => {
        showToast('جاري تشغيل كاميرا مسح الباركود للتعرف التلقائي على الدواء 📷');
      };
    }

    // Camera prescription upload
    const cameraCta = document.getElementById('camera-upload-cta');
    if (cameraCta) {
      cameraCta.onclick = () => openPrescriptionModal();
    }
    const pdfUploadBtn = cameraCta?.nextElementSibling;
    if (pdfUploadBtn) {
      pdfUploadBtn.onclick = () => openPrescriptionModal();
    }

    // Medical Categories links
    const categoryLinks = document.querySelectorAll('section .grid.grid-cols-3 a');
    const categoryMap = [
      'antibiotics', // أدوية بوصفة
      'painkillers', // مسكنات وحرارة
      'vitamins',    // فيتامينات ومكملات
      'skincare',    // العناية بالبشرة
      'baby',        // رعاية الطفل
      'devices'      // أجهزة قياس
    ];
    categoryLinks.forEach((link, idx) => {
      const cat = categoryMap[idx] || 'all';
      link.href = `${getRelativePath('medicines.html')}?category=${cat}`;
    });

    // "عرض الكل" link
    document.querySelectorAll('a').forEach(a => {
      if (a.textContent.includes('عرض الكل')) {
        a.href = getRelativePath('medicines.html');
      }
    });

    // "مشاهدة المزيد" in Bestseller
    document.querySelectorAll('a').forEach(a => {
      if (a.textContent.includes('مشاهدة المزيد')) {
        a.href = `${getRelativePath('medicines.html')}?filter=bestseller`;
      }
    });

    // Pharmacist chat button
    const chatBtn = document.querySelector('button[aria-label="بدء محادثة فورية"]');
    if (chatBtn) {
      chatBtn.onclick = () => openPharmacistChat();
    }

    // Add to cart buttons in Home
    const homeProducts = [
      { id: 'panadol-extra', name: 'بانادول إكسترا أقراص', price: 14.50, tag: 'مسكن وألم', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDM7Hq5OrjlQb3kmrXgWpYlMS39A1lww0eTtFQZuWtTUMwMwyA63oY2wa4yWQmOyurDZPuc72AVn040chvhFOMPMX44YVhuXaAgAmRvGkj0FmWZ-VCsm_Zx6bXexL6Fws9EL2BN8ON9iq3I7NERWbcXs2TKIlgNcUTyKQHwWgGhPFd2n-sdNajbAHuAnaiPcgrOLNgyCyNDkYiqQ7v21wearqc2tKdWEhubeakU4sY8YFINpGoAmCv' },
      { id: 'omega-3', name: 'أوميغا 3 عالي التركيز', price: 68.00, tag: 'فيتامينات ومكملات', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNLbxkxkuFEOCvI8fPMpV6lH8uCst12qcUt5-_7jqLbQshPf5y2brsLdUn4ojXUblpGnVYM2xIu0ZKkLsyVuTjHT8PC85YfMFZcTApHxZvpLgOmbRd3TYrVC-p9tV8NQdg63QuzbDmdZMc-BtFrepW-fA9dtdFfGcye3h2l3YZiGpMRD0fDdRwrYv_aqY_HFL4vnX_yIcs7_VE1f7rxwZxqqfekdTdLCQIb5jYeX7h11xQSZ14XyjU' },
      { id: 'vitamin-c', name: 'فيتامين سي فوار ١٠٠٠ ملغ', price: 22.00, tag: 'فيتامينات ومكملات', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBDlxMH1MtCofJSRTbiPnB4nslvGkOfvj53A28iZ_gMtEwvRIvjTzKpnDE_FmyprdkAFpUTWdhavC4ts6ysHi9BdEdtDVUrOqMj0S7buFkuhUgD-0SySy9-wRYcnfQq8Uvo6rSoc2wL-xE8ZwnVFYnUxuvLiEkR8dQ6yvekEl9ZoaKHAkKBLHLUaALKrNF_R4GK1iaHckyVHbNME6p3AEjNDgt1NRuRsNpdEqE3ac1rXx77EOiwqc8' }
    ];

    document.querySelectorAll('.add-to-cart-btn').forEach((btn, index) => {
      btn.onclick = function(e) {
        e.stopPropagation();
        const prod = homeProducts[index] || DEFAULT_PRODUCTS[index];
        addToCart(prod, 1);
        const icon = this.querySelector('.material-symbols-outlined');
        if (icon) {
          icon.innerText = 'check';
          this.classList.add('bg-primary', 'text-on-primary');
          setTimeout(() => {
            icon.innerText = 'add';
            this.classList.remove('bg-primary', 'text-on-primary');
          }, 1000);
        }
      };
    });

    // Refill chronic medicine button
    const refillBtn = document.getElementById('refill-chronic-cta');
    if (refillBtn) {
      refillBtn.onclick = function() {
        const concor = DEFAULT_PRODUCTS.find(p => p.id === 'concor');
        addToCart(concor, 1);
        const originalText = this.innerHTML;
        this.innerHTML = '<span class="material-symbols-outlined text-[20px] animate-spin">refresh</span> <span>جاري تأكيد إعادة الصرف...</span>';
        setTimeout(() => {
          this.innerHTML = '<span class="material-symbols-outlined text-[20px]">task_alt</span> <span>تمت الإضافة للسلة بنجاح!</span>';
          this.classList.replace('bg-primary', 'bg-tertiary-container');
          setTimeout(() => {
            this.innerHTML = originalText;
            this.classList.replace('bg-tertiary-container', 'bg-primary');
          }, 2000);
        }, 800);
      };
    }
  }

  // Medicines / Search Page Initializer
  function initMedicinesPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q') || '';
    const categoryParam = urlParams.get('category') || urlParams.get('filter') || 'all';

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      if (query) {
        searchInput.value = query;
      }
      searchInput.addEventListener('input', function() {
        filterMedicines(this.value.trim().toLowerCase(), getActiveCategory());
      });
    }

    // Prescription banner in Search
    const uploadBtn = document.querySelector('button[onclick="simulateUpload()"]');
    if (uploadBtn) {
      uploadBtn.removeAttribute('onclick');
      uploadBtn.onclick = () => openPrescriptionModal();
    }

    // Barcode button
    const scanBtn = document.querySelector('button[onclick="triggerScanFeedback()"]');
    if (scanBtn) {
      scanBtn.removeAttribute('onclick');
      scanBtn.onclick = () => {
        showToast('قم بتوجيه الكاميرا إلى باركود علبة الدواء 📷');
      };
    }

    // Filter drawer toggle
    const filterBtn = document.getElementById('filter-toggle-btn');
    if (filterBtn) {
      filterBtn.removeAttribute('onclick');
      filterBtn.onclick = () => {
        const sheet = document.getElementById('filter-options-sheet');
        if (sheet) sheet.classList.toggle('hidden');
      };
    }

    // Pharmacist banner chat
    const chatBtn = document.querySelector('button[onclick="startPharmacistChat()"]');
    if (chatBtn) {
      chatBtn.removeAttribute('onclick');
      chatBtn.onclick = () => openPharmacistChat();
    }

    // Category Chips
    document.querySelectorAll('.chip-filter').forEach(chip => {
      chip.removeAttribute('onclick');
      chip.onclick = function() {
        document.querySelectorAll('.chip-filter').forEach(b => {
          b.className = "chip-filter flex-shrink-0 px-4 py-2 rounded-full font-label-sm text-label-sm transition-all active:scale-95 bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)]";
        });
        this.className = "chip-filter flex-shrink-0 px-4 py-2 rounded-full font-label-sm text-label-sm transition-all active:scale-95 bg-primary text-on-primary shadow-sm";
        const cat = this.getAttribute('data-filter') || 'all';
        filterMedicines(searchInput ? searchInput.value.trim().toLowerCase() : '', cat);
      };
    });

    // If category was passed in URL, activate its chip
    if (categoryParam && categoryParam !== 'all') {
      const matchChip = document.querySelector(`.chip-filter[data-filter="${categoryParam}"]`);
      if (matchChip) {
        matchChip.click();
      }
    } else if (query) {
      filterMedicines(query.toLowerCase(), 'all');
    }

    // Hook product card add-to-cart buttons
    const cards = document.querySelectorAll('.grid.grid-cols-2 > div');
    const catalogCardsData = [
      DEFAULT_PRODUCTS[0], // Panadol
      DEFAULT_PRODUCTS[1], // Omega
      DEFAULT_PRODUCTS[2], // Vit C
      DEFAULT_PRODUCTS[3], // Augmentin (Rx)
      DEFAULT_PRODUCTS[4], // Refresh Plus
      DEFAULT_PRODUCTS[5]  // Accu Chek
    ];

    cards.forEach((card, i) => {
      const prod = catalogCardsData[i] || DEFAULT_PRODUCTS[i];
      const addBtn = card.querySelector('button[onclick*="addToCart"]');
      if (addBtn && prod) {
        addBtn.removeAttribute('onclick');
        addBtn.onclick = function(e) {
          e.stopPropagation();
          addToCart(prod, 1);
          const icon = this.querySelector('.material-symbols-outlined');
          if (icon) {
            icon.innerText = 'check';
            this.classList.add('bg-secondary');
            setTimeout(() => {
              icon.innerText = 'add';
              this.classList.remove('bg-secondary');
            }, 1000);
          }
        };
      }

      // Rx button (Augmentin)
      const rxBtn = card.querySelector('button[onclick*="requestRxPrompt"]');
      if (rxBtn) {
        rxBtn.removeAttribute('onclick');
        rxBtn.onclick = (e) => {
          e.stopPropagation();
          openPrescriptionModal();
        };
      }

      // Fav toggle
      const favBtn = card.querySelector('button[onclick*="toggleFav"]');
      if (favBtn) {
        favBtn.removeAttribute('onclick');
        favBtn.onclick = function(e) {
          e.stopPropagation();
          const icon = this.querySelector('.material-symbols-outlined');
          if (icon) {
            const isFav = icon.textContent === 'favorite';
            icon.textContent = isFav ? 'favorite_border' : 'favorite';
            icon.classList.toggle('text-error', !isFav);
            icon.classList.toggle('text-outline', isFav);
            icon.style.fontVariationSettings = isFav ? "'FILL' 0" : "'FILL' 1";
            showToast(isFav ? 'تمت الإزالة من المفضلة' : 'تمت الإضافة إلى المفضلة ❤️');
          }
        };
      }
    });
  }

  function getActiveCategory() {
    const activeChip = document.querySelector('.chip-filter.bg-primary');
    return activeChip ? activeChip.getAttribute('data-filter') : 'all';
  }

  function filterMedicines(query, category) {
    const cards = document.querySelectorAll('.grid.grid-cols-2 > div');
    const categoriesMap = {
      0: 'painkillers',
      1: 'vitamins',
      2: 'vitamins',
      3: 'antibiotics',
      4: 'otc',
      5: 'devices'
    };

    cards.forEach((card, index) => {
      const title = card.querySelector('.line-clamp-1')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.line-clamp-2')?.textContent.toLowerCase() || '';
      const cardCategory = categoriesMap[index] || 'otc';

      let matchQuery = !query || title.includes(query) || desc.includes(query);
      let matchCat = (category === 'all') ||
                     (category === cardCategory) ||
                     (category === 'bestseller' && (index === 0 || index === 1 || index === 2)) ||
                     (category === 'otc' && index !== 3);

      if (matchQuery && matchCat) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Cart Page Initializer
  function initCartPage() {
    renderCartList();

    // Coupon Apply
    const couponInput = document.getElementById('coupon-code');
    const couponBtn = couponInput?.parentElement?.nextElementSibling;
    if (couponBtn) {
      couponBtn.onclick = () => {
        const code = couponInput.value.trim().toUpperCase();
        if (code === 'SAHA10' || code === 'صحة10') {
          showToast('تم تفعيل خصم 10% بنجاح! 🎉');
          updateCartSummary();
        } else if (code) {
          showToast('رمز الكوبون غير صالح أو منتهي الصلاحية');
        }
      };
    }

    // Payment methods active toggle
    const payBtns = document.querySelectorAll('section .grid.grid-cols-3 button');
    payBtns.forEach(btn => {
      btn.onclick = function() {
        payBtns.forEach(b => {
          b.className = "bg-surface-container-lowest p-2.5 rounded-xl shadow-xs flex flex-col items-center justify-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors";
        });
        this.className = "bg-surface-container-lowest p-2.5 rounded-xl shadow-xs flex flex-col items-center justify-center gap-1.5 text-primary bg-secondary-container/20 ring-1 ring-primary";
      };
    });

    // Clear cart button
    const clearBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('تفريغ السلة'));
    if (clearBtn) {
      clearBtn.onclick = () => {
        if (confirm('هل أنت متأكد من تفريغ كافة عناصر السلة؟')) {
          clearCart();
          renderCartList();
          showToast('تم تفريغ السلة بنجاح');
        }
      };
    }

    // Sticky Checkout Button
    const checkoutBtn = document.querySelector('.sticky.bottom-2 button') ||
                        Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('متابعة الدفع'));
    if (checkoutBtn) {
      checkoutBtn.onclick = () => openCheckoutModal();
    }
  }

  function renderCartList() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    const cart = getCart();

    // Header count
    const countHeader = container.querySelector('h2 span:last-child');
    if (countHeader) countHeader.textContent = `(${cart.length} منتجات)`;

    // Keep the header, remove previous articles
    const existingArticles = container.querySelectorAll('article');
    existingArticles.forEach(a => a.remove());

    if (cart.length === 0) {
      const emptyDiv = document.createElement('div');
      emptyDiv.className = 'bg-surface-container-lowest rounded-3xl p-8 text-center flex flex-col items-center gap-3 shadow-sm';
      emptyDiv.innerHTML = `
        <div class="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center text-outline">
          <span class="material-symbols-outlined text-[42px]">shopping_cart_off</span>
        </div>
        <h3 class="font-headline-sm font-bold text-on-surface">سلة المشتريات فارغة</h3>
        <p class="text-body-sm text-on-surface-variant max-w-xs">لم تقم بإضافة أي أدوية أو منتجات بعد إلى سلتك.</p>
        <a href="${getRelativePath('medicines.html')}" class="mt-2 px-6 py-2.5 bg-primary text-on-primary rounded-full font-label-lg font-bold shadow-md hover:bg-primary-container transition-all">
          تصفح الأدوية الآن
        </a>
      `;
      container.appendChild(emptyDiv);
      updateCartSummary();
      return;
    }

    cart.forEach(item => {
      const article = document.createElement('article');
      article.className = 'bg-surface-container-lowest rounded-2xl p-3.5 shadow-sm flex gap-3 relative transition-all';
      article.dataset.id = item.id;
      article.innerHTML = `
        <div class="w-20 h-20 rounded-xl overflow-hidden bg-surface-container-low flex-shrink-0 flex items-center justify-center">
          <img class="w-full h-full object-cover" src="${item.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuBniVHRlP9rbNIpVYXFV-njp7PDFkeQkvfJGud07k7eVp52tVszfxe2MLE5t0HlANLXdiq3aApZDKn7StbRu1FKQ5AAiLteIqEjPfJgGEl7u6hBdFhNoP6SsfHxCuGcKk4yI2v5gnka7okuTNSE5zajfd6CFeFCJAmXZ_xQ0QjjGIrDeCDdByWUZ7wDnuSLBy-pr6lA1ORI5JVUbATSNsYxlX154rHbgTRoJoJZmdfyOn-EnMDRb3bu'}" alt="${item.name}">
        </div>
        <div class="flex flex-col justify-between flex-grow min-w-0">
          <div class="flex items-start justify-between gap-1">
            <div>
              <span class="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm px-2 py-0.5 rounded-full inline-block mb-1">${item.tag || 'منتج دوائي'}</span>
              <h3 class="font-label-lg text-label-lg text-on-surface leading-snug truncate">${item.name}</h3>
            </div>
            <button aria-label="حذف العنصر" class="delete-item-btn text-outline hover:text-error transition-colors p-1 -mt-1 -ml-1" type="button">
              <span class="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
          <div class="flex items-center justify-between mt-2">
            <div class="flex items-baseline gap-1">
              <span class="font-headline-sm text-headline-sm text-primary font-bold">${item.price.toFixed(2)}</span>
              <span class="font-label-sm text-label-sm text-on-surface-variant">ر.س</span>
            </div>
            <!-- Quantity Stepper -->
            <div class="flex items-center bg-surface-container-low rounded-full px-1.5 py-0.5 gap-2">
              <button class="step-add w-7 h-7 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-xs hover:bg-primary hover:text-on-primary transition-colors" type="button">
                <span class="material-symbols-outlined text-[16px]">add</span>
              </button>
              <span class="qty-span font-label-md text-label-md text-on-surface min-w-[16px] text-center">${item.quantity || 1}</span>
              <button class="step-sub w-7 h-7 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant shadow-xs hover:bg-error hover:text-on-error transition-colors" type="button">
                <span class="material-symbols-outlined text-[16px]">remove</span>
              </button>
            </div>
          </div>
        </div>
      `;

      // Stepper & Delete handlers
      article.querySelector('.step-add').onclick = () => {
        updateQuantity(item.id, 1);
        renderCartList();
      };
      article.querySelector('.step-sub').onclick = () => {
        updateQuantity(item.id, -1);
        renderCartList();
      };
      article.querySelector('.delete-item-btn').onclick = () => {
        removeFromCart(item.id);
        renderCartList();
        showToast(`تم حذف "${item.name}"`);
      };

      container.appendChild(article);
    });

    updateCartSummary();
  }

  function updateCartSummary() {
    const subtotal = getCartSubtotal();
    const discount = subtotal > 0 ? (subtotal * 0.10) : 0;
    const shipping = subtotal >= 100 || subtotal === 0 ? 0 : 12.00;
    const taxableAmount = Math.max(0, subtotal - discount + shipping);
    const vat = taxableAmount * 0.15;
    const total = taxableAmount + vat;

    // Shipping progress
    const freeShippingTarget = 100;
    const diff = Math.max(0, freeShippingTarget - subtotal);
    const pct = Math.min(100, Math.round((subtotal / freeShippingTarget) * 100));

    const bannerSection = Array.from(document.querySelectorAll('section')).find(s => s.textContent.includes('للتوصيل المجاني')) || document.querySelector('section');
    if (bannerSection) {
      const bannerText = bannerSection.querySelector('.font-label-md');
      const bannerPct = bannerSection.querySelector('.font-label-sm.text-primary.font-bold');
      const progressBar = bannerSection.querySelector('.bg-primary.h-full');

      if (bannerText && bannerPct && progressBar) {
        if (diff === 0) {
          bannerText.innerHTML = `🎉 مبروك! لقد حصلت على <span class="text-primary font-bold">شحن مجاني</span> لطلبك!`;
          bannerPct.textContent = '100%';
          progressBar.style.width = '100%';
        } else {
          bannerText.innerHTML = `أضف منتجات بقيمة <span class="text-primary font-bold">${diff.toFixed(2)} ر.س</span> إضافية للتوصيل المجاني!`;
          bannerPct.textContent = `${pct}%`;
          progressBar.style.width = `${pct}%`;
        }
      }
    }

    // Breakdown lines
    const summarySection = Array.from(document.querySelectorAll('section')).find(s => s.textContent.includes('ملخص الطلب'));
    if (summarySection) {
      const lines = summarySection.querySelectorAll('.flex.items-center.justify-between');
      if (lines[0]) lines[0].querySelector('span:last-child').textContent = `${subtotal.toFixed(2)} ر.س`;
      if (lines[1]) lines[1].querySelector('span:last-child').textContent = `-${discount.toFixed(2)} ر.س`;
      if (lines[2]) lines[2].querySelector('span:last-child').textContent = shipping === 0 ? 'مجاني' : `${shipping.toFixed(2)} ر.س`;
      if (lines[3]) lines[3].querySelector('span:last-child').textContent = `${vat.toFixed(2)} ر.س`;

      const totalVal = summarySection.querySelector('.font-headline-lg');
      if (totalVal) totalVal.textContent = total.toFixed(2);
    }

    // Bottom checkout button price
    const stickyPrice = document.querySelector('.sticky.bottom-2 .font-bold');
    if (stickyPrice) {
      stickyPrice.textContent = total.toFixed(2);
    }
  }

  function openCheckoutModal() {
    const cart = getCart();
    if (cart.length === 0) {
      showToast('سلة المشتريات فارغة، أضف بعض الأدوية أولاً');
      return;
    }

    const orderNum = Math.floor(100000 + Math.random() * 900000);
    let modal = document.getElementById('checkout-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'checkout-modal';
      modal.className = 'modal-backdrop fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-content w-full sm:max-w-md bg-surface-container-lowest rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl text-center space-y-4">
        <div class="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mx-auto shadow-md">
          <span class="material-symbols-outlined text-[36px]">check_circle</span>
        </div>
        <h3 class="font-headline-md text-headline-md font-bold text-on-surface">تم استلام طلبك بنجاح!</h3>
        <p class="text-body-sm text-on-surface-variant">
          رقم الطلب: <strong class="text-primary font-bold">#${orderNum}</strong><br>
          يقوم الصيدلي المعتمد الآن بتجهيز الأدوية ومراجعة الجرعات. التوصيل متوقع خلال 30 دقيقة إلى <span class="font-medium text-on-surface">حي النخيل، الرياض</span>.
        </p>
        <div class="bg-surface-container-low p-3.5 rounded-2xl flex items-center justify-between text-right">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[22px]">local_shipping</span>
            <span class="font-label-md text-on-surface">مندوب التوصيل السريع</span>
          </div>
          <span class="font-label-sm text-primary font-bold">في الطريق إليك 🛵</span>
        </div>
        <div class="space-y-2 pt-2">
          <button class="w-full py-3 bg-primary text-on-primary rounded-full font-label-lg font-bold shadow-md hover:bg-primary-container active:scale-95 transition-all" onclick="PharmacyApp.finishCheckoutOrder()" type="button">
            العودة للرئيسية
          </button>
          <button class="w-full py-2.5 text-on-surface-variant hover:text-primary font-label-md" onclick="PharmacyApp.openPharmacistChat()" type="button">
            تواصل مع الصيدلي بخصوص الطلب
          </button>
        </div>
      </div>
    `;

    modal.classList.add('active');
  }

  function finishCheckoutOrder() {
    clearCart();
    const modal = document.getElementById('checkout-modal');
    if (modal) modal.classList.remove('active');
    window.location.href = getRelativePath('index.html');
  }

  // Account Page Initializer
  function initAccountPage() {
    const user = JSON.parse(localStorage.getItem(USER_KEY) || 'null');
    if (user && user.isLoggedIn) {
      renderLoggedInProfile(user);
    }

    // Submit handler
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
      submitBtn.onclick = function() {
        const isRegister = document.getElementById('fullNameGroup')?.classList.contains('flex');
        const nameInput = document.querySelector('#fullNameGroup input');
        const phoneInput = document.querySelector('input[placeholder="50 123 4567"]');

        const userName = isRegister && nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'د. سارة العتيبي';
        const userData = {
          name: userName,
          phone: phoneInput ? phoneInput.value.trim() : '0501234567',
          isLoggedIn: true
        };

        localStorage.setItem(USER_KEY, JSON.stringify(userData));

        this.innerHTML = `<span class="material-symbols-outlined animate-spin text-[20px]">progress_activity</span> جارِ تسجيل الدخول...`;
        setTimeout(() => {
          showToast(`مرحباً بك يا ${userName}! تم تسجيل الدخول بنجاح`);
          window.location.href = getRelativePath('index.html');
        }, 800);
      };
    }

    // Guest Continuation
    const guestBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('المتابعة كضيف'));
    if (guestBtn) {
      guestBtn.onclick = () => {
        window.location.href = getRelativePath('index.html');
      };
    }

    // Benefit cards click handlers
    const benefitCards = document.querySelectorAll('.grid.grid-cols-3 > div');
    if (benefitCards[0]) {
      benefitCards[0].style.cursor = 'pointer';
      benefitCards[0].onclick = () => openPrescriptionModal();
    }
    if (benefitCards[1]) {
      benefitCards[1].style.cursor = 'pointer';
      benefitCards[1].onclick = () => showToast('⏰ تذكير: تم ضبط منبه يومي لجرعة الدواء الصباحية الساعة 9:00 ص');
    }
    if (benefitCards[2]) {
      benefitCards[2].style.cursor = 'pointer';
      benefitCards[2].onclick = () => openPharmacistChat();
    }
  }

  function renderLoggedInProfile(user) {
    const introCard = document.querySelector('.bg-surface-container-lowest.rounded-3xl.p-6');
    if (introCard) {
      introCard.innerHTML = `
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center gap-3">
            <img class="w-14 h-14 rounded-full object-cover ring-2 ring-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANMRCCqCKrEl2Ix0h_70v3RIy-CmPJbVA5bsNhqMzBgmP5D7EgXIuhj5XyK2sF4cK7NgGLPdDDUbO8E1qskwiFmLoEVj76e-k51yLXgwK0mbI6IJuCZ3xEBe0ugdkDxdWJCPom6XdZFElFYrteRQzzxLTRROeGtq0ybZlUnrNJmEK97wni0CZ2n2fhaj4G87AytdeEUoSYcLjRqDKbBR8BdlBkCpxVTjuhxsMbiKV2zovkRsiDLJdg" alt="Profile" />
            <div class="flex flex-col text-right">
              <span class="font-headline-sm text-headline-sm text-on-surface font-bold">${user.name}</span>
              <span class="text-body-sm text-on-surface-variant font-mono" dir="ltr">+966 ${user.phone}</span>
            </div>
          </div>
          <button class="px-3 py-1.5 rounded-full bg-surface-container-low text-error text-label-sm font-semibold hover:bg-error-container hover:text-on-error-container transition-all" onclick="PharmacyApp.logout()" type="button">
            خروج
          </button>
        </div>
      `;
    }

    const formContainer = document.querySelector('.bg-surface-container-lowest.rounded-3xl.p-5.shadow-sm.space-y-4');
    if (formContainer) {
      formContainer.innerHTML = `
        <div class="space-y-3">
          <h3 class="font-headline-sm font-bold text-on-surface">إجراءات حسابك السريعة</h3>
          <div class="grid grid-cols-2 gap-2.5">
            <button class="p-3 bg-surface-container-low hover:bg-surface-container rounded-2xl flex flex-col items-center gap-2 text-primary transition-all" onclick="PharmacyApp.openPrescriptionModal()" type="button">
              <span class="material-symbols-outlined text-[26px]">prescriptions</span>
              <span class="font-label-md font-bold">رفع وصفة جديدة</span>
            </button>
            <button class="p-3 bg-surface-container-low hover:bg-surface-container rounded-2xl flex flex-col items-center gap-2 text-primary transition-all" onclick="window.location.href='${getRelativePath('cart.html')}'" type="button">
              <span class="material-symbols-outlined text-[26px]">shopping_bag</span>
              <span class="font-label-md font-bold">طلباتي السابقة</span>
            </button>
          </div>
        </div>
      `;
    }
  }

  function logout() {
    localStorage.removeItem(USER_KEY);
    showToast('تم تسجيل الخروج بنجاح');
    setTimeout(() => window.location.reload(), 500);
  }

  // Master Initializer on DOM Ready
  function init() {
    initCart();
    setupNavigation();
    updateCartBadges();

    const pageId = getCurrentPageId();
    if (pageId === 'home') {
      initHomePage();
    } else if (pageId === 'medicines') {
      initMedicinesPage();
    } else if (pageId === 'cart') {
      initCartPage();
    } else if (pageId === 'account') {
      initAccountPage();
    }
  }

  // Run immediately or on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCart,
    getCartCount,
    getCartSubtotal,
    openPrescriptionModal,
    closePrescriptionModal,
    handleRxFile,
    submitPrescription,
    openPharmacistChat,
    closePharmacistChat,
    sendChatMessage,
    openCheckoutModal,
    finishCheckoutOrder,
    logout,
    showToast
  };
})();
