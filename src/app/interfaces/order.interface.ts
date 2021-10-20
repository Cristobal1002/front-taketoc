export interface Pedido {
    order_type: string;
    order_category: string;
    date_delivery: string;
    pickup_remarks?: string;
    customer_name: string;
    delivery_city: string;
    customer_address: string;
    customer_phone: string;
    have_payment?: boolean;
    payment_amount?: number;
    order_status: string;
    order_detail: [];
    pending_marks?: string;
}