// ============================================
// JEANE PIMENTA - LINGERIE & PIJAMAS
// PRODUCT DATA CATALOG
// ============================================
const products = [
	{
		id: 1,
		name: "Conjunto Rendado Noir Imperial",
		price: 189.90,
		category: "lingerie",
		defaultColor: "bordeaux",
		variants: {
			bordeaux: {
				name: "Bordô Marsala",
				image: "assets/img/products/conjunto-renda-bordeaux.jpg",
				stock: 14
			},
			black: {
				name: "Preto Nobre",
				image: "assets/img/products/conjunto-renda-black.jpg",
				stock: 8
			},
			ivory: {
				name: "Off-White Pérola",
				image: "assets/img/products/conjunto-renda-ivory.jpg",
				stock: 6
			}
		},
		badge: "Mais Vendido",
		description:
			"Conjunto autoral com sutiã estruturado em renda floral francesa e calcinha caleçon com acabamento invisível. Detalhes folheados a ouro e conforto sublime para ocasiões inesquecíveis.",
		rating: 4.9,
		reviews: 48
	},
	{
		id: 2,
		name: "Pijama Silk & Satin Dreams Longo",
		price: 269.90,
		category: "pijamas",
		defaultColor: "champagne",
		variants: {
			champagne: {
				name: "Champanhe Seda",
				image: "assets/img/products/pijama-seda-champagne.jpg",
				stock: 12
			},
			burgundy: {
				name: "Bordô Intenso",
				image: "assets/img/products/pijama-seda-burgundy.jpg",
				stock: 10
			},
			black: {
				name: "Preto Cetim",
				image: "assets/img/products/pijama-seda-black.jpg",
				stock: 5
			}
		},
		badge: "Toque de Seda",
		description:
			"Elegância pura em seda acetinada de caimento fluido. Camisa manga longa com gola notched, vivos em contraste e botões madrepérola acompanhada de calça pantalona com elástico suave.",
		rating: 5.0,
		reviews: 62
	},
	{
		id: 3,
		name: "Robe Longo Bridal em Seda com Renda",
		price: 329.90,
		category: "noivas",
		defaultColor: "ivory",
		variants: {
			ivory: {
				name: "Branco Noiva",
				image: "assets/img/products/robe-noiva-ivory.jpg",
				stock: 7
			},
			champagne: {
				name: "Champagne Glow",
				image: "assets/img/products/robe-noiva-champagne.jpg",
				stock: 4
			}
		},
		badge: "Linha Noiva",
		description:
			"Peça dos sonhos para o dia da noiva e momentos eternos. Mangas longas em renda guipir trabalhada artesanalmente, faixa longa de amarração na cintura e comprimento nobre.",
		rating: 5.0,
		reviews: 39
	},
	{
		id: 4,
		name: "Body Sensual Allure em Tule e Renda",
		price: 219.90,
		category: "lingerie",
		defaultColor: "bordeaux",
		variants: {
			bordeaux: {
				name: "Bordô Sensual",
				image: "assets/img/products/body-allure-bordeaux.jpg",
				stock: 11
			},
			black: {
				name: "Preto Allure",
				image: "assets/img/products/body-allure-black.jpg",
				stock: 9
			}
		},
		badge: "Destaque",
		description:
			"Modelagem que desenha a silhueta feminina com recortes anatômicos em tule illusion e renda chantilly. Perfeito para compor looks outwear sofisticados ou noites especiais.",
		rating: 4.8,
		reviews: 31
	},
	{
		id: 5,
		name: "Short Doll Confort Elegance Rosé",
		price: 159.90,
		category: "pijamas",
		defaultColor: "rose",
		variants: {
			rose: {
				name: "Rosé Blush",
				image: "assets/img/products/short-doll-rose.jpg",
				stock: 15
			},
			black: {
				name: "Preto Cetim",
				image: "assets/img/products/short-doll-black.jpg",
				stock: 7
			},
			nude: {
				name: "Nude Soft",
				image: "assets/img/products/short-doll-nude.jpg",
				stock: 4
			}
		},
		badge: "Lançamento",
		description:
			"A delicadeza do cetim com toque macio de pele de pêssego e renda delicada no decote e barra do short. Leveza, frescor e glamour para o seu descanso diário.",
		rating: 4.7,
		reviews: 24
	},
	{
		id: 6,
		name: "Camisola Longa Glamour Esmeralda & Marsala",
		price: 239.90,
		category: "pijamas",
		defaultColor: "emerald",
		variants: {
			emerald: {
				name: "Verde Esmeralda",
				image: "assets/img/products/camisola-esmeralda.jpg",
				stock: 8
			},
			black: {
				name: "Preto Noturno",
				image: "assets/img/products/camisola-black.jpg",
				stock: 6
			}
		},
		badge: "Exclusivo",
		description:
			"Slip dress em seda com decote V adornado por renda marsala francesa e fenda lateral sutil. Alças reguláveis banhadas a ouro e caimento fluido impecável.",
		rating: 4.9,
		reviews: 19
	},
	{
		id: 7,
		name: "Pijama Silk Marsala Monograma",
		price: 279.90,
		category: "pijamas",
		defaultColor: "burgundy",
		variants: {
			burgundy: {
				name: "Bordô Marsala",
				image: "assets/img/products/pijama-seda-burgundy.jpg",
				stock: 14
			},
			champagne: {
				name: "Champagne Glow",
				image: "assets/img/products/pijama-seda-champagne.jpg",
				stock: 8
			}
		},
		badge: "Edição Especial",
		description:
			"O clássico pijama de luxo da Jeane Pimenta. Confeccionado em seda nobre com brilho suave e toque térmico que se adapta à temperatura corporal. Acompanha máscara de descanso.",
		rating: 5.0,
		reviews: 53
	},
	{
		id: 8,
		name: "Robe Curto Peignoir Delicacy",
		price: 219.90,
		category: "robes",
		defaultColor: "champagne",
		variants: {
			champagne: {
				name: "Champanhe",
				image: "assets/img/products/pijama-seda-champagne.jpg",
				stock: 10
			},
			burgundy: {
				name: "Bordô",
				image: "assets/img/products/conjunto-renda-bordeaux.jpg",
				stock: 6
			}
		},
		badge: "Essencial",
		description:
			"Robe curto e envolvente com mangas amplas 3/4 e renda nos punhos. Uma terceira peça indispensável para momentos de relaxamento com elegância inigualável.",
		rating: 4.8,
		reviews: 27
	}
];

// ============================================
// STATE MANAGEMENT
// ============================================
let cart = [];
const STORAGE_KEY = "jeanepimenta_cart";
const VALID_COUPONS = {
	"PRIMEIRACOMPRA": 10,
	"JEANE10": 10,
	"VIP15": 15,
	"BEMVINDA10": 10
};
const SHIPPING_COST = 25.00;
const FREE_SHIPPING_THRESHOLD = 250.00;

// ============================================
// DOM ELEMENTS
// ============================================
const productGrid = document.getElementById("product-grid");
const cartBtn = document.getElementById("cart-btn");
const closeCart = document.getElementById("close-cart");
const cartSidebar = document.getElementById("cart-sidebar");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartShipping = document.getElementById("cart-shipping");
const cartDiscount = document.getElementById("cart-discount");
const discountRow = document.getElementById("discount-row");
const cartCount = document.querySelector(".cart-count");
const filterBtns = document.querySelectorAll(".filter-btn");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navLinks = document.getElementById("nav-links");
const applyCouponBtn = document.getElementById("apply-coupon");
const couponInput = document.getElementById("coupon-input");
const toast = document.getElementById("toast");
const header = document.getElementById("header");

// ============================================
// INITIALIZATION
// ============================================
function initStore() {
	loadCartFromStorage();
	renderProducts(products);
	setupEventListeners();
	updateCart();
}

// ============================================
// PRODUCT RENDERING
// ============================================
function renderProducts(productsToRender) {
	productGrid.innerHTML = "";
	
	if (productsToRender.length === 0) {
		productGrid.innerHTML = `
			<div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px;">
				<i class="fas fa-search" style="font-size: 2.5rem; color: var(--accent-color); margin-bottom: 15px;"></i>
				<h3>Nenhuma peça encontrada nesta categoria</h3>
				<p style="color: var(--text-secondary); margin-top: 8px;">Explore outras opções ou volte para todas as peças.</p>
			</div>
		`;
		return;
	}

	productsToRender.forEach((product) => {
		const productCard = document.createElement("article");
		productCard.className = "product-card";
		productCard.setAttribute("data-category", product.category);
		productCard.setAttribute("data-product-id", product.id);

		const defaultVariant = product.variants[product.defaultColor];
		const stockStatus =
			defaultVariant.stock > 10
				? "stock-available"
				: defaultVariant.stock > 0
				? "stock-low"
				: "stock-out";
		const stockText =
			defaultVariant.stock > 10
				? `Disponível em estoque`
				: defaultVariant.stock > 0
				? `Últimas ${defaultVariant.stock} unidades!`
				: "Esgotado no momento";
		const starsHTML = generateStars(product.rating);

		// Category Label Formatter
		const categoryLabels = {
			lingerie: "Lingerie Fina",
			pijamas: "Pijama de Seda",
			robes: "Robe & Peignoir",
			noivas: "Linha Noiva"
		};

		// Color Swatches
		let colorSwatchesHTML = "";
		const colors = Object.keys(product.variants);
		if (colors.length > 1) {
			colorSwatchesHTML = `
				<div class="color-options">
					${colors
						.map(
							(color) => `
						<button 
							class="color-swatch ${color === product.defaultColor ? "active" : ""}" 
							style="background-color: ${getColorHex(color)}" 
							data-color="${color}"
							title="${product.variants[color].name || color}"
							onclick="changeProductColor(${product.id}, '${color}', this)"
							aria-label="Selecionar cor ${product.variants[color].name || color}"
						></button>
					`
						)
						.join("")}
				</div>
			`;
		}

		productCard.innerHTML = `
			<div class="product-image-container">
				${
					product.badge
						? `<span class="product-badge">${product.badge}</span>`
						: ""
				}
				<img src="${defaultVariant.image}" alt="${product.name}" class="product-main-image" id="img-${product.id}" loading="lazy">
			</div>
			
			<div class="product-info">
				<span class="product-category">${categoryLabels[product.category] || product.category}</span>
				<h3 class="product-title">${product.name}</h3>
				<p class="product-description">${product.description}</p>
				
				<div class="product-rating">
					<span class="stars">${starsHTML}</span>
					<span class="review-count">(${product.reviews} avaliações)</span>
				</div>
				
				<div class="product-stock ${stockStatus}" id="stock-${product.id}">
					${stockText}
				</div>
				
				<div class="product-variants-ui">
					<div class="variant-group">
						<label>Tamanho</label>
						<div class="size-options">
							<button class="size-btn" onclick="selectSize(this)">P</button>
							<button class="size-btn active" onclick="selectSize(this)">M</button>
							<button class="size-btn" onclick="selectSize(this)">G</button>
							<button class="size-btn" onclick="selectSize(this)">GG</button>
						</div>
					</div>
					${
						colorSwatchesHTML
							? `
						<div class="variant-group">
							<label>Cor</label>
							${colorSwatchesHTML}
						</div>
					`
							: ""
					}
				</div>
				
				<div class="product-footer">
					<div class="product-price">R$ ${product.price.toFixed(2).replace(".", ",")}</div>
					<button class="btn add-to-cart-btn" onclick="addToCart(${product.id}, event)" aria-label="Adicionar ${product.name} à sacola" ${
						defaultVariant.stock === 0 ? "disabled" : ""
					}>
						<i class="fas fa-shopping-bag" aria-hidden="true"></i>
						<span>Comprar</span>
					</button>
				</div>
			</div>
		`;
		productGrid.appendChild(productCard);
	});
}

// Color Switcher
function changeProductColor(productId, color, btnElement) {
	const product = products.find((p) => p.id === productId);
	if (!product) return;

	const variant = product.variants[color];
	const imgElement = document.getElementById(`img-${productId}`);
	const stockElement = document.getElementById(`stock-${productId}`);
	const cardElement = btnElement.closest(".product-card");
	const addToCartBtn = cardElement.querySelector(".add-to-cart-btn");

	// Update Swatches UI
	const swatches = btnElement.parentElement.querySelectorAll(".color-swatch");
	swatches.forEach((s) => s.classList.remove("active"));
	btnElement.classList.add("active");

	// Transition Image Smoothly
	imgElement.style.opacity = "0";
	setTimeout(() => {
		imgElement.src = variant.image;
		imgElement.onload = () => {
			imgElement.style.opacity = "1";
		};
	}, 150);

	// Update Stock
	const stockStatus =
		variant.stock > 10
			? "stock-available"
			: variant.stock > 0
			? "stock-low"
			: "stock-out";
	const stockText =
		variant.stock > 10
			? `Disponível em estoque`
			: variant.stock > 0
			? `Últimas ${variant.stock} unidades!`
			: "Esgotado no momento";

	stockElement.className = `product-stock ${stockStatus}`;
	stockElement.textContent = stockText;

	// Update Add to Cart Button
	if (variant.stock === 0) {
		addToCartBtn.disabled = true;
		addToCartBtn.querySelector("span").textContent = "Esgotado";
	} else {
		addToCartBtn.disabled = false;
		addToCartBtn.querySelector("span").textContent = "Comprar";
	}
}

function selectSize(btn) {
	const btns = btn.parentElement.querySelectorAll(".size-btn");
	btns.forEach((b) => b.classList.remove("active"));
	btn.classList.add("active");
}

function getColorHex(color) {
	const colors = {
		bordeaux: "#5C1420",     // Marsala / Bordô
		burgundy: "#5C1420",
		black: "#1c1516",        // Preto Nobre
		ivory: "#f8f1ea",        // Pérola / Off-White
		champagne: "#e6d5c3",    // Champanhe
		rose: "#d9a59b",         // Rosé Blush
		emerald: "#1e4d3e",      // Verde Esmeralda
		nude: "#debfa8",         // Nude
		standard: "#c59b6d"      // Gold
	};
	return colors[color] || "#c59b6d";
}

// ============================================
// HELPER FUNCTIONS
// ============================================
function generateStars(rating) {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
	let stars = "";
	for (let i = 0; i < fullStars; i++) {
		stars += '<i class="fas fa-star"></i>';
	}
	if (hasHalfStar) {
		stars += '<i class="fas fa-star-half-alt"></i>';
	}
	const emptyStars = 5 - Math.ceil(rating);
	for (let i = 0; i < emptyStars; i++) {
		stars += '<i class="far fa-star"></i>';
	}
	return stars;
}

function showToast(message, type = "success") {
	const icon = type === "success" ? '<i class="fas fa-check-circle" style="color: #c59b6d"></i>' : '<i class="fas fa-exclamation-circle" style="color: #ff6b6b"></i>';
	toast.innerHTML = `${icon} <span>${message}</span>`;
	toast.className = `toast show ${type}`;
	setTimeout(() => {
		toast.classList.remove("show");
	}, 3500);
}

// ============================================
// CART FUNCTIONS
// ============================================
function toggleCart() {
	cartSidebar.classList.toggle("active");
	document.body.style.overflow = cartSidebar.classList.contains("active")
		? "hidden"
		: "auto";
}

function addToCart(productId, event) {
	const product = products.find((p) => p.id === productId);
	if (!product) return;

	const card = event.currentTarget.closest(".product-card");
	const selectedSize = card.querySelector(".size-btn.active") ? card.querySelector(".size-btn.active").textContent : "M";
	const activeSwatch = card.querySelector(".color-swatch.active");
	const selectedColor = activeSwatch
		? activeSwatch.dataset.color
		: product.defaultColor;

	const variant = product.variants[selectedColor];
	if (variant.stock <= 0) {
		showToast("Desculpe, esta variação está esgotada.", "error");
		return;
	}

	const colorName = variant.name || selectedColor;
	const cartItemId = `${productId}-${selectedSize}-${selectedColor}`;
	const existingItem = cart.find((item) => item.cartItemId === cartItemId);

	if (existingItem) {
		existingItem.quantity++;
	} else {
		cart.push({
			id: product.id,
			name: product.name,
			price: product.price,
			cartItemId,
			selectedSize,
			selectedColor,
			colorName,
			image: variant.image,
			quantity: 1
		});
	}

	// Micro-interaction: Fly to cart
	const btn = event.currentTarget;
	const cartBtnIcon = document.getElementById("cart-btn");
	const rect = btn.getBoundingClientRect();
	const cartRect = cartBtnIcon.getBoundingClientRect();

	const flyer = document.createElement("div");
	flyer.className = "cart-flyer";
	flyer.innerHTML = `<img src="${variant.image}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
	flyer.style.setProperty("--tx", `${cartRect.left - rect.left}px`);
	flyer.style.setProperty("--ty", `${cartRect.top - rect.top}px`);
	flyer.style.left = `${rect.left + rect.width / 2}px`;
	flyer.style.top = `${rect.top + rect.height / 2}px`;
	document.body.appendChild(flyer);

	// Button feedback
	const originalContent = btn.innerHTML;
	btn.classList.add("added");
	btn.innerHTML = `<i class="fas fa-check"></i> <span>Adicionado!</span>`;
	btn.disabled = true;

	setTimeout(() => {
		flyer.remove();
		btn.classList.remove("added");
		btn.innerHTML = originalContent;
		btn.disabled = false;
	}, 800);

	// Cart pulse
	cartBtnIcon.classList.add("pulse");
	setTimeout(() => cartBtnIcon.classList.remove("pulse"), 500);

	saveCartToStorage();
	updateCart();
	showToast(`${product.name} adicionado à sua sacola!`);
}

function removeFromCart(cartItemId) {
	cart = cart.filter((item) => item.cartItemId !== cartItemId);
	saveCartToStorage();
	updateCart();
	showToast("Item removido da sacola");
}

function changeQuantity(cartItemId, delta) {
	const item = cart.find((item) => item.cartItemId === cartItemId);
	if (item) {
		item.quantity += delta;
		if (item.quantity <= 0) {
			removeFromCart(cartItemId);
		} else {
			saveCartToStorage();
			updateCart();
		}
	}
}

function updateCart() {
	const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
	cartCount.textContent = totalItems;

	if (cart.length === 0) {
		cartItemsContainer.innerHTML = `
			<div class="empty-cart">
				<i class="fas fa-shopping-bag" aria-hidden="true"></i>
				<p>Sua sacola está vazia</p>
				<a href="#products" class="btn btn-primary" onclick="toggleCart()">Explorar Coleção</a>
			</div>
		`;
	} else {
		cartItemsContainer.innerHTML = "";
		cart.forEach((item) => {
			const itemEl = document.createElement("div");
			itemEl.className = "cart-item";
			itemEl.innerHTML = `
				<img src="${item.image}" alt="${item.name}">
				<div class="cart-item-info">
					<h4>${item.name}</h4>
					<span class="cart-item-meta">Tam: ${item.selectedSize} | Cor: ${item.colorName}</span>
					<div class="cart-item-qty">
						<button class="qty-btn" onclick="changeQuantity('${item.cartItemId}', -1)" aria-label="Diminuir quantidade">−</button>
						<span>${item.quantity}</span>
						<button class="qty-btn" onclick="changeQuantity('${item.cartItemId}', 1)" aria-label="Aumentar quantidade">+</button>
					</div>
					<p class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")}</p>
				</div>
				<button class="remove-item" onclick="removeFromCart('${item.cartItemId}')" aria-label="Remover item">
					<i class="fas fa-trash-can"></i>
				</button>
			`;
			cartItemsContainer.appendChild(itemEl);
		});
	}
	calculateCartTotals();
}

function calculateCartTotals() {
	const subtotal = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	
	let discountPercent = 0;
	if (couponInput.dataset.applied === "true") {
		const appliedCode = couponInput.dataset.code;
		discountPercent = VALID_COUPONS[appliedCode] || 10;
		const discount = subtotal * (discountPercent / 100);
		discountRow.style.display = "flex";
		discountRow.querySelector("span").textContent = `Desconto Cupom (${discountPercent}%)`;
		cartDiscount.textContent = `-R$ ${discount.toFixed(2).replace(".", ",")}`;
	} else {
		discountRow.style.display = "none";
	}

	const discountAmount = subtotal * (discountPercent / 100);
	const shipping = cart.length > 0 ? (subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST) : 0;
	const total = Math.max(0, subtotal - discountAmount + shipping);

	cartSubtotal.textContent = `R$ ${subtotal.toFixed(2).replace(".", ",")}`;
	cartShipping.textContent = cart.length > 0 
		? (shipping === 0 ? "GRÁTIS (VIP)" : `R$ ${shipping.toFixed(2).replace(".", ",")}`)
		: "R$ 0,00";
	cartTotal.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
}

function applyCoupon() {
	const code = couponInput.value.trim().toUpperCase();
	if (VALID_COUPONS[code]) {
		couponInput.dataset.applied = "true";
		couponInput.dataset.code = code;
		couponInput.disabled = true;
		applyCouponBtn.disabled = true;
		applyCouponBtn.textContent = "Aplicado!";
		showToast(`Cupom ${code} aplicado com sucesso! (${VALID_COUPONS[code]}% OFF)`, "success");
		calculateCartTotals();
	} else {
		showToast("Cupom inválido. Tente PRIMEIRACOMPRA ou JEANE10", "error");
	}
}

function saveCartToStorage() {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function loadCartFromStorage() {
	const saved = localStorage.getItem(STORAGE_KEY);
	if (saved) {
		try {
			cart = JSON.parse(saved);
		} catch (e) {
			cart = [];
		}
	}
}

// ============================================
// CHECKOUT VIA WHATSAPP
// ============================================
function proceedToCheckout() {
	if (cart.length === 0) {
		showToast("Adicione peças à sacola antes de finalizar!", "error");
		return;
	}

	const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
	const isDiscount = couponInput.dataset.applied === "true";
	const discountPercent = isDiscount ? (VALID_COUPONS[couponInput.dataset.code] || 10) : 0;
	const discountAmount = subtotal * (discountPercent / 100);
	const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
	const total = subtotal - discountAmount + shipping;

	let message = `✨ *NOVO PEDIDO - JEANE PIMENTA* ✨\n\n`;
	message += `Olá! Gostaria de confirmar meu pedido:\n\n`;
	
	cart.forEach((item, index) => {
		message += `*${index + 1}. ${item.name}*\n`;
		message += `   • Tam: ${item.selectedSize} | Cor: ${item.colorName}\n`;
		message += `   • Qtd: ${item.quantity} un | R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")}\n\n`;
	});

	message += `--------------------------------\n`;
	message += `*Subtotal:* R$ ${subtotal.toFixed(2).replace(".", ",")}\n`;
	if (isDiscount) {
		message += `*Cupom:* ${couponInput.dataset.code} (-${discountPercent}%: -R$ ${discountAmount.toFixed(2).replace(".", ",")})\n`;
	}
	message += `*Frete:* ${shipping === 0 ? "GRÁTIS" : `R$ ${shipping.toFixed(2).replace(".", ",")}`}\n`;
	message += `*TOTAL:* R$ ${total.toFixed(2).replace(".", ",")}\n\n`;
	message += `Por favor, me informe os dados para pagamento e entrega. Obrigada! 🌹`;

	const encodedMessage = encodeURIComponent(message);
	const whatsappUrl = `https://wa.me/5533991689776?text=${encodedMessage}`;
	
	window.open(whatsappUrl, "_blank");
}

function handleNewsletter(event) {
	event.preventDefault();
	const emailInput = document.getElementById("newsletter-email");
	if (emailInput && emailInput.value) {
		showToast("Bem-vinda ao Clube VIP Jeane Pimenta! 🥂", "success");
		emailInput.value = "";
	}
}

// ============================================
// EVENT LISTENERS & SETUP
// ============================================
function setupEventListeners() {
	cartBtn.addEventListener("click", toggleCart);
	closeCart.addEventListener("click", toggleCart);

	mobileMenuToggle.addEventListener("click", () => {
		navLinks.classList.toggle("active");
		mobileMenuToggle.classList.toggle("active");
	});

	// Close mobile menu on click link
	navLinks.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => {
			navLinks.classList.remove("active");
			mobileMenuToggle.classList.remove("active");
		});
	});

	// Category filter tabs
	filterBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			filterBtns.forEach((b) => b.classList.remove("active"));
			btn.classList.add("active");
			const filter = btn.dataset.filter;
			const filteredProducts =
				filter === "all" ? products : products.filter((p) => p.category === filter);
			renderProducts(filteredProducts);
		});
	});

	applyCouponBtn.addEventListener("click", applyCoupon);
	couponInput.addEventListener("keypress", (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			applyCoupon();
		}
	});

	// Header background scroll effect
	window.addEventListener("scroll", () => {
		if (window.scrollY > 40) {
			header.classList.add("scrolled");
		} else {
			header.classList.remove("scrolled");
		}
	});
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", initStore);
